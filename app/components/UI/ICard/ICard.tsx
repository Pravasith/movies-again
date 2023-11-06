import { Button, Card, CardContent, Divider, Skeleton } from "@mui/material";
import ITypography from "@/components/UI/ITypography/ITypography";
import IImage from "@/components/UI/IImage/IImage";
import { TypographyVariants } from "@/components/UI/ITypography/interface";
import { GenreType } from "services/interface";
import Link from "next/link";

interface ICardProps {
  title: string;
  overview: string;
  poster: string;
  releaseDate: string;
  className?: string;
  isLoading: boolean;
  genres: GenreType[];
}

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const ICard = ({
  title,
  overview,
  releaseDate,
  poster,
  className,
  isLoading,
  genres,
}: ICardProps) => {
  return (
    <div
      className={`
        ${className}
      `}
    >
      <Card className={"shadow-xl rounded-2xl border-4 border-white"}>
        {isLoading ? (
          <div className="w-[20rem]">
            <Skeleton width={"100%"} height={"2.5rem"} />
            <Skeleton width={"100%"} height={"2.5rem"} />
            <Skeleton width={"100%"} height={"10rem"} />
          </div>
        ) : (
          <>
            <CardContent sx={{ maxWidth: 345 }}>
              <IImage
                className="mb-2 rounded-lg overflow-clip"
                fitToContainer
                imageBlock={{
                  className: `rounded-lg`,
                  src: IMAGE_PATH + poster,
                  alt: "Image thumbnail for " + title,
                }}
              />
              <ITypography type={TypographyVariants.H2}>{title}</ITypography>

              <Divider className="my-1" />

              <ITypography className={`my-2`}>{overview}</ITypography>

              <ITypography className={`my-2`}>{releaseDate}</ITypography>

              {genres.map((genre, i) => {
                return (
                  <Link key={genre.id + i} href={"/movies/" + genre.id}>
                    <Button
                      className="inline-block"
                      key={genre.id}
                      size="small"
                    >
                      {genre.name}
                    </Button>
                  </Link>
                );
              })}
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default ICard;
