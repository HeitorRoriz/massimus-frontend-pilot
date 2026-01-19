import Image from "next/image"

export function Certifications() {
  const badges = [
    {
      name: "Scrum Alliance",
      image: "/images/scrum-alliance-logo.png",
      bgColor: "bg-white",
    },
    {
      name: "Management 3.0",
      image: "/images/id3gzfhvlh-1768332026952.png",
      bgColor: "bg-white",
    },
    {
      name: "Kanban University",
      image: "/images/kanban-certified-training.png",
      bgColor: "bg-white",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10">Avance com Certificações Reconhecidas Mundialmente</h2>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div
                className={`w-36 h-24 rounded-xl ${badge.bgColor} border border-border flex items-center justify-center p-4`}
              >
                <Image
                  src={badge.image || "/placeholder.svg"}
                  alt={badge.name}
                  width={120}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-sm text-muted-foreground font-medium">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
