import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { articles } from "@/data/articles.js";

function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === parseInt(id, 10));

  if (!article) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Makale bulunamadı
          </h1>
          <p className="text-muted-foreground mb-6">
            Aradığınız makale mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link to="/makaleler">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Makalelere Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="flex-1 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/makaleler")}
            className="mb-8 transition-all duration-200 active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Makalelere Dön
          </Button>

          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h1
                className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {article.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 flex justify-between items-center">
            {article.id > 1 && (
              <Link to={`/makaleler/${article.id - 1}`}>
                <Button variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Önceki Makale
                </Button>
              </Link>
            )}
            {article.id < articles.length && (
              <Link to={`/makaleler/${article.id + 1}`} className="ml-auto">
                <Button variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                  Sonraki Makale
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export default ArticleDetailPage;
