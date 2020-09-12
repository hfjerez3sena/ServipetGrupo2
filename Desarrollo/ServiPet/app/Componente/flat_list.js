import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
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
      spacing={5}
      renderItem={({ item }) => (
        <View
          style={[styles.itemContainer]}
          onStartShouldSetResponder={() => {
            clickBoton(item.clickId);
          }}
        >
          {item.image}
          <Text
            style={{
              width: "100%",
              height: "40%",
              fontSize: 18,
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
});
