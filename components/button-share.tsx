"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BotonCompartir() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Mira este artículo que me pareció interesante:",
          url: window.location.href,
        })
        .catch((error) => console.error("Error al compartir:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles.");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 gap-1 text-muted-foreground"
      onClick={handleShare}
    >
      <Share2 className="h-4 w-4" />
      <span>Compartir</span>
    </Button>
  );
}
