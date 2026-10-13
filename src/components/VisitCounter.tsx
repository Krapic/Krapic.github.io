import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const VisitCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const logAndCount = async () => {
      // Log this visit once per browser session
      if (!sessionStorage.getItem("visit-logged")) {
        await supabase.from("page_visits").insert({});
        sessionStorage.setItem("visit-logged", "1");
      }
      const { count: total } = await supabase
        .from("page_visits")
        .select("*", { count: "exact", head: true });
      if (total !== null) setCount(total);
    };
    logAndCount();
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
      <Eye className="w-4 h-4" />
      <span className="code-font">{count.toLocaleString()} visits</span>
    </div>
  );
};
