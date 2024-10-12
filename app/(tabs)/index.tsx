import { View, Text, Image } from "react-native";
import React from "react";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";

// https://unsplash.com/photos/pink-and-black-wallpaper-9XngoIpxcEo

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: "black",
          light: "white",
        }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        }
      >
        <Text>Explore Page</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ab eius
          voluptatem vitae perspiciatis maiores minima a dolores atque sit
          pariatur recusandae omnis, culpa inventore error expedita eaque quas.
          Ad nulla iure ipsa hic harum dicta! Commodi sed amet voluptates nemo
          corrupti tempore quos? Amet quis voluptate dolor repellendus
          consectetur ut nostrum, reiciendis aliquam temporibus laboriosam
          provident labore debitis assumenda illo deleniti nobis natus inventore
          saepe nesciunt vel sunt, enim, ullam a minus. Fugiat nostrum
          recusandae ad tempore necessitatibus eaque explicabo placeat
          consectetur culpa, laboriosam quo nam dolor, deleniti id possimus
          voluptate, vitae asperiores aspernatur aliquam vel iusto voluptas
          pariatur. Enim repellendus unde error tempora quibusdam vel quos illum
          ipsum, suscipit ex voluptatibus velit eligendi, itaque facilis
          accusantium delectus ut quia! Nostrum voluptas perferendis corrupti
          iure possimus harum blanditiis tenetur aspernatur animi sed eos
          fugiat, excepturi accusantium dolores consectetur soluta at, laborum
          sequi veritatis numquam! Exercitationem hic est ullam, aperiam
          quibusdam, cum mollitia, odio nesciunt maiores unde et illum placeat
          nostrum commodi. A ducimus, consectetur repellendus doloribus odit
          beatae, aut officiis magni fugiat delectus quaerat quisquam eligendi
          architecto mollitia soluta itaque, quibusdam id reiciendis tempora
          eveniet maiores perferendis fuga libero! Quod, mollitia temporibus
          ipsa laudantium quo earum amet dolor aliquid eveniet non odio. Sequi
          deserunt ut ratione obcaecati, corporis rerum quasi facere dignissimos
          et velit vero voluptatibus veritatis ad ab eligendi quo dolore
          laboriosam accusamus totam excepturi eius sed minima aut hic. Beatae
          aperiam et doloribus ut. Labore illo delectus, impedit inventore
          excepturi cum, exercitationem rerum repellat quidem aspernatur omnis?
          Voluptatibus nemo commodi veritatis voluptate tempora, laborum
          blanditiis a ullam assumenda voluptates doloribus exercitationem est
          nulla vero vel repellendus numquam. Optio eius pariatur, perferendis
          enim voluptatum ipsa excepturi perspiciatis labore asperiores possimus
          sapiente placeat ipsam iure cum tempora distinctio adipisci. Expedita
          quos distinctio praesentium est hic earum libero explicabo dignissimos
          voluptates, deserunt minus dolorem ea, repudiandae provident possimus
          recusandae odio assumenda natus. Sit perferendis expedita dolores a
          vitae nesciunt, assumenda, commodi accusantium enim sint ipsa! Quos,
          temporibus illum itaque voluptas nesciunt iure? Veniam est labore ad
          exercitationem, expedita soluta dolore unde praesentium cumque
          accusamus error suscipit illo, aut officia porro similique minus
          laudantium. Ipsum possimus earum dignissimos distinctio, libero
          temporibus, nesciunt sapiente aut ad delectus totam sequi quas
          dolorum! Molestiae ducimus eligendi, sunt, temporibus ab sint
          asperiores eveniet cum explicabo, nostrum voluptates tempora beatae
          inventore itaque deserunt repudiandae magnam tenetur quidem eos odio
          ex natus? Molestias impedit numquam nihil neque.
        </Text>
      </ParallaxScrollView>
    </View>
  );
};

export default Index;
