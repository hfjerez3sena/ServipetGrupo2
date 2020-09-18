import * as React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function FlatListIndex(props) {
  const { informationObject, clickBoton } = props;
  const [elementos] = informationObject;

  return (
    <FlatGrid
      itemDimension={130}
      data={elementos}
      style={styles.gridView}
      staticDimension={300}
      spacing={10}
      renderItem={({ item }) => (
        <View
          style={([styles.itemContainer], [styles.itemContainer])}
          onStartShouldSetResponder={() => {
            clickBoton(item.clickId);
          }}
        >
          <Image style={{ width: "90%", height: "80%" }} source={item.image} />

          <Text
            style={{
              width: "100%",
              height: "30%",
              fontSize: 16,
              color: item.code,
              textAlign: "center",
              textShadowColor: "#fafafa",
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    alignSelf: "center",
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    width: "100%",
    height: "20%",
    fontSize: 16,
    color: "#5d4294",
    textAlign: "center",
    textShadowColor: "#fafafa",
    fontWeight: "600",
  },
  itemCode: {
    width: "100%",
    height: "20%",
    fontWeight: "600",
    fontSize: 14,
    color: "#5d4294",
  },
});
