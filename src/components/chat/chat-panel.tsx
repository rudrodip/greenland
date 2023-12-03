import { type UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { PromptForm } from "@/components/chat/prompt-form";
import { IconRefresh, IconStop } from "@/components/ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearMessages } from "@/redux/slices/chatSlice";
import { usePathname } from "next/navigation";
import { Hit } from "@/types/zenodo";
import { IconArrowRight } from "@/components/ui/icons";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "setInput"
  > {
  id?: string;
}

export function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: ChatPanelProps) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { record } = useAppSelector((state) => state.recordSlice);

  const ExplainResearchPaper = async (record: Hit) => {
    const prompt = `Its a system prompt. Here's a research paper:-
      title: ${record.metadata.title}
      published: ${record?.metadata.publication_date}
      type: ${record.metadata.resource_type.title.toUpperCase()}
      creators: ${record.metadata?.creators?.join(", ")}
      keywords: ${record.metadata?.keywords?.join(", ")}
      description: ${record.metadata?.description}
      Please explain this research paper to the user like a professional in fewer words. And try to answer questions.
      `;
    dispatch(clearMessages());
    await append({
      id: "pre-prompt",
      content: prompt,
      role: "system",
    });
  };

  return (
    <div>
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="flex h-10 items-center justify-center gap-3">
          {isLoading ? (
            <Button
              variant="outline"
              onClick={() => stop()}
              className="bg-background"
            >
              <IconStop className="mr-2" />
              Stop generating
            </Button>
          ) : (
            messages?.length > 0 && (
              <Button
                variant="outline"
                onClick={() => reload()}
                className="bg-background"
              >
                <IconRefresh className="mr-2" />
                Regenerate response
              </Button>
            )
          )}
          {pathname?.includes("/papers") && record?.metadata.description && (
            <Button
              variant="outline"
              className="bg-background"
              onClick={async () => await ExplainResearchPaper(record)}
              disabled={isLoading}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              Explain this paper
            </Button>
          )}
        </div>
        <div className="space-y-4 border-t px-4 py-2 sm:rounded-t-xl sm:border md:py-4">
          <PromptForm
            onSubmit={async (value) => {
              await append({
                id,
                content: value,
                role: "user",
              });
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
