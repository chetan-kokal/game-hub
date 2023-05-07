import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {genres.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                  fontWeight={selectedGenre?.id === genre.id ? 700 : 400}
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
