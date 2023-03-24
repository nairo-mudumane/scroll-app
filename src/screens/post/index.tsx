import { ScrollView, Text, View } from "react-native";
import { ProgressBar } from "../../components";
import { styles } from "./styles";

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Lorem ipsum</Text>
          <View>
            <Text style={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              necessitatibus tempora maiores nesciunt adipisci atque ducimus eum
              quod inventore reiciendis reprehenderit, quas, explicabo iste
              sapiente possimus nobis quia unde facilis!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dicta iusto unde eum repellendus molestiae. Amet nemo fugiat
              molestiae, asperiores voluptatibus temporibus veniam minima cum
              fugit rem, suscipit, magnam atque!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              officia veritatis tempore qui repellendus earum reprehenderit
              consequuntur, dolor nulla, asperiores beatae doloremque officiis
              molestias hic, sunt nesciunt sint nemo cumque?
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              necessitatibus tempora maiores nesciunt adipisci atque ducimus eum
              quod inventore reiciendis reprehenderit, quas, explicabo iste
              sapiente possimus nobis quia unde facilis!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dicta iusto unde eum repellendus molestiae. Amet nemo fugiat
              molestiae, asperiores voluptatibus temporibus veniam minima cum
              fugit rem, suscipit, magnam atque!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              officia veritatis tempore qui repellendus earum reprehenderit
              consequuntur, dolor nulla, asperiores beatae doloremque officiis
              molestias hic, sunt nesciunt sint nemo cumque?
            </Text>
          </View>

          <View>
            <Text style={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              necessitatibus tempora maiores nesciunt adipisci atque ducimus eum
              quod inventore reiciendis reprehenderit, quas, explicabo iste
              sapiente possimus nobis quia unde facilis!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dicta iusto unde eum repellendus molestiae. Amet nemo fugiat
              molestiae, asperiores voluptatibus temporibus veniam minima cum
              fugit rem, suscipit, magnam atque!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              officia veritatis tempore qui repellendus earum reprehenderit
              consequuntur, dolor nulla, asperiores beatae doloremque officiis
              molestias hic, sunt nesciunt sint nemo cumque?
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              necessitatibus tempora maiores nesciunt adipisci atque ducimus eum
              quod inventore reiciendis reprehenderit, quas, explicabo iste
              sapiente possimus nobis quia unde facilis!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dicta iusto unde eum repellendus molestiae. Amet nemo fugiat
              molestiae, asperiores voluptatibus temporibus veniam minima cum
              fugit rem, suscipit, magnam atque!
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              officia veritatis tempore qui repellendus earum reprehenderit
              consequuntur, dolor nulla, asperiores beatae doloremque officiis
              molestias hic, sunt nesciunt sint nemo cumque?
            </Text>
          </View>
        </ScrollView>
        <ProgressBar value={34} />
      </View>
    </View>
  );
}
