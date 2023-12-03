"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function LoginButton() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <Tabs defaultValue="signin" className="w-[400px] my-5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <Image
                src="/bg/team.png"
                alt="connect"
                width={600}
                height={600}
                className="rounded-md"
              />
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 flex justify-center flex-col">
              <Button
                variant="outline"
                onClick={() => {
                  setLoading(true);
                  signIn("google");
                }}
                disabled={loading}
              >
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <Image
                src="/bg/team.png"
                alt="connect"
                width={600}
                height={600}
                className="rounded-md"
              />
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 flex justify-center flex-col">
              <Button
                variant="outline"
                onClick={() => {
                  setLoading(true);
                  signIn("google");
                }}
                disabled={loading}
              >
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
