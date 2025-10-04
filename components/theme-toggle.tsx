"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Renderizar un botón neutro durante la hidratación
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        disabled
        className="h-9 w-9 border-border/50"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Alternar tema</span>
      </Button>
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="h-9 w-9 border-border/50 hover:bg-accent hover:text-accent-foreground"
    >
      <Sun
        className={`h-4 w-4 transition-all ${
          currentTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${
          currentTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}
