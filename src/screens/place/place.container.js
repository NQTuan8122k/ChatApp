import React, {useCallback, useState} from 'react';
import PlaceView from './place.view';
const listData = [
  {
    image:
      'https://i.pinimg.com/564x/a2/aa/a2/a2aaa21d4caa0da425d6d7f4400b800d.jpg',
    name: 'Landmannalauga',
    location: 'Fjallebak, Iceland',
  },
  {
    image:
      'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-10-853x1024.jpg?tr=dpr-2,w-675',
    name: 'Tràng An',
    location: 'Ninh Bình',
  },
  {
    image:
      'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-8-1024x1024.jpg?tr=dpr-2,w-675',
    name: 'Pù Luông',
    location: 'Thanh Hóa, Iceland',
  },
  {
    image:
      'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-16-819x1024.jpg?tr=dpr-2,w-675',
    name: 'Chùa Thiên Mụ',
    location: 'Huế',
  },
  {
    image:
      'https://statics.vinpearl.com/nha-trang-beaches-banner%20-%20Copy_1661247069.jpg',
    name: 'Biển abc',
    location: 'Phú Quốc',
  },
  // 'https://wallpaperaccess.com/full/1143632.jpg',
  // 'https://img.freepik.com/premium-photo/nature-wallpaper-beautiful-nature-wallpaper-4k-nature-wallpapers-hd-nature-wallpaper-green-nature_722194-174.jpg?w=900',
  // 'https://p4.wallpaperbetter.com/wallpaper/976/840/844/nature-landscape-wallpaper-preview.jpg',
  // 'https://wallpaperaccess.com/full/31189.jpg',
];

const labelTag = [
  {name: 'Popular', icon: 'local-fire-department', category: 'MaterialIcons'},
  {name: 'Lake', icon: 'water', category: 'FontAwesome5'},
  {name: 'Bleach', icon: 'umbrella-beach', category: 'FontAwesome5'},
  {name: 'Moutaint', icon: 'mountains', category: 'Foundation'},
  {name: 'Forest', icon: 'forest', category: 'MaterialCommunityIcons'},
];

const PlaceContainer = () => {
  const [data, setData] = useState({data: listData});
  const [isFocus, setIsFocus] = useState(0);
  const [currentPicture, setCurrentPicture] = useState(listData?.length - 1);

  const onFocus = useCallback(text => {
    setIsFocus(text);
  }, []);

  return (
    <PlaceView
      listData={listData}
      labelTag={labelTag}
      data={data}
      onFocus={onFocus}
      currentPicture={currentPicture}
      setCurrentPicture={setCurrentPicture}
      setData={setData}
      isFocus={isFocus}
    />
  );
};

export default PlaceContainer;
