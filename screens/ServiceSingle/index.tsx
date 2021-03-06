import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import SingleBackground from '../../components/SingleBackground';
import { calcSize, removeTags } from '../../utils/Misc';

interface ServiceSingleScreenParams {
  route: any;
  navigation: any;
}

export default function ServiceSingleScreen(props: ServiceSingleScreenParams) {
  const { route } = props;
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <SingleBackground />
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.innerContainer}>
          <View style={styles.serviceWrap}>
            <Text style={styles.service} numberOfLines={1}>
              {service.service}
            </Text>
          </View>
          <View style={styles.nameWrap}>
            <Text style={styles.name} numberOfLines={1}>
              {service.name}
            </Text>
          </View>
          {/* isFree, instagram, website, price, whatsapp, telegram, vkontakte */}
          <View style={styles.hr} />
          <View style={styles.descriptionContainer}>
            <Text>{removeTags(service.description)}</Text>
          </View>
          {/* TODO: download masked image from Figma and remove eventWaveContainer */}
          <View style={styles.eventWaveContainer}>
            <Image
              style={styles.eventWave}
              source={require('../../assets/img/service_wave_x4.png')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
  },
  innerContainer: {
    width: calcSize(315),
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 50,
    marginHorizontal: calcSize(30),
    borderRadius: calcSize(10),

    shadowColor: '#444',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  serviceWrap: {
    height: 40,
    paddingTop: 11,
    paddingHorizontal: calcSize(13),
  },
  service: {
    fontSize: 18,
    color: '#24BA7B',
    fontWeight: 'bold',
  },
  nameWrap: {
    height: 40,
    paddingTop: 11,
    paddingHorizontal: calcSize(13),
  },
  name: {
    fontSize: 18,
    color: '#404040',
    fontWeight: 'bold',
  },
  hr: {
    width: calcSize(295),
    height: 2,
    backgroundColor: '#24BA7B',
    marginHorizontal: calcSize(10),
    marginTop: 20,
  },
  descriptionContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: calcSize(15),
    paddingBottom: calcSize(70),
  },
  eventWaveContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    width: calcSize(315),
    height: calcSize(37),
    borderBottomLeftRadius: calcSize(10),
    borderBottomRightRadius: calcSize(10),
    zIndex: -1,
  },
  eventWave: {
    width: calcSize(315),
    height: calcSize(37),
  },
});
