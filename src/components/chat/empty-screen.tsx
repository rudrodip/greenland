import { UseChatHelpers } from "ai/react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/chat/external-link";
import { IconArrowRight } from "@/components/ui/icons";

const exampleMessages = [
  {
    heading: "Can you explain the basics of climate change?",
    message: `Can you explain the basics of climate change?`,
  },
  {
    heading: "What is the impact of greenhouse gases on the environment?",
    message: "What is the impact of greenhouse gases on the environment?",
  },
  {
    heading: "Tell me about renewable energy sources and their importance",
    message: `Tell me about renewable energy sources and their importance`,
  },
];

export function EmptyScreen({
  setInput,
}: Pick<UseChatHelpers, "setInput">) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">GreenGuide: GreenLander AI Chatbot</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an open source AI chatbot built with{" "}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{" "}
          <ExternalLink href="https://sdk.vercel.ai/">
            Vercel AI SDK
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
