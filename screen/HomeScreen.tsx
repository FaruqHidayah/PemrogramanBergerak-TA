import React from 'react';
import { FlatList, Text, View, Image, Dimensions } from 'react-native';

const data = [
  { key: '1', title: 'Celana Pendek Cowok Boxer', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98s-lqyq4rsc3z2h34' },
  { key: '2', title: 'Celana Pendek Distro', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98w-lvhl617t10hb1b' },
  { key: '3', title: 'Celana Pendek Pria Wanita ', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lw8vkc0obgvib3' },
  { key: '4', title: 'Boardshort Cargo', image: 'https://down-id.img.susercontent.com/file/sg-11134201-22120-cqmc6ljbndlv85' },
  { key: '5', title: 'CELANA PANJANG PRIA', image: 'https://down-id.img.susercontent.com/file/sg-11134201-23010-3ugkpgq53ulv62' },
  { key: '6', title: 'Jujutsu Kaisen Geto Crewneck Hijau 0498', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98v-lwqz2gd6r9fub9' },
  { key: '7', title: 'BOXER / KOLOR HARIAN', image: 'https://down-id.img.susercontent.com/file/910a71b9d0ffa3519a58983db94d3374' },
  { key: '8', title: 'Dobujack Jogger Pants Preston Black', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r990-llin8h544iuh55' },
  { key: '9', title: 'Jaket Rompi Pria', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-lnll8687v24maa' },
  { key: '10', title: 'MIDDLEITS | HOODIE BOXY OVERSIZE | MOON HONEY', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98y-ltgzbm2q7d3643' },
  { key: '11', title: 'Element Folding / Sepeda Lipat Troy 8Sp 16Inch Pastel Edition', image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98v-lt50ahitvupy6f' },
 
];

const MyComponent = () => {
  const renderItem = ({ item }) => (
    <View style={{
      flex: 1,
      margin: 10,
      alignItems: 'center',
      backgroundColor: 'chocolate'
    }}>
      <Image
        style={{
          width: (Dimensions.get('window').width / 2) - 30,
          height: 150,
          marginBottom: 10,
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
        }}
        source={{ uri: item.image }}
      />
      <Text style={{ 
        fontSize: 16, 
        fontWeight: 'bold'
        }}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      numColumns={2} 
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

export default MyComponent;