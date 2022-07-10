import React, { useEffect } from 'react';
import {
  View,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import { useSelector, useDispatch } from 'react-redux';
import * as $ from '../../redux/actions/action';
const Main = () => {
    const {data} = useSelector(state => state.datas)
    const dispatch = useDispatch();


  const getPhotos = () => {
      CameraRoll.getPhotos({
        first: 50,
        assetType: 'Photos',
      })
        .then((res) => {
          dispatch($.setData(res.edges))
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: 'İzin Açıklaması',
    message: 'CameraRoll Uygulaması, fotoğraflarınıza erişmek istiyor!',
        },
    );
    if (result !== 'granted') {
      console.log('Resimlere erişim engellendi');
    return;
      } else {
      getPhotos();
      }
    } else {
      getPhotos();
    }
  };

  useEffect(() => {
      askPermission();
  }, []);

    return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Image
            style={{
              width: '33%',
              height: 150,
              margin: 5
            }}
            source={{ uri: item.node.image.uri }}
          />
        )}
      />
    </View>
    );
};

export default (Main);