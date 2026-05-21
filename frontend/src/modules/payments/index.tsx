import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banknote, Send } from "lucide-react";

export function Panel() {
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Banknote className="h-5 w-5 text-brand" />
          <CardTitle>Send a payment</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full rounded-xl bg-brand-bg border border-brand-border px-3 py-2 text-sm"
          placeholder="Recipient address (G...)"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-xl bg-brand-bg border border-brand-border px-3 py-2 text-sm"
          placeholder="Amount"
        />
        <Button className="w-full" disabled={!to || !amount}>
          <Send className="h-4 w-4" /> Send
        </Button>
        <p className="text-xs text-brand-ink/50">Demo only. Connects the on-chain payments module.</p>
      </CardContent>
    </Card>
  );
}
