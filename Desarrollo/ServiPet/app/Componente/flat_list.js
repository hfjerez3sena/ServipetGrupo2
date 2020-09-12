import * as React from "react";
import { styleSheet, View, Text, Image, Dimension } from "react-native";
import { flatGrid } from "react-native-super-grid";

export default function FlatListIndex(props) {
  const { informationObject, clickboton } = props;
  const [elementos] = informationObject;

  return (
    <flatGrid
      itemDimnsion={130}
      data={elementos}
      style={style.gridView}
      staticDimension={300}
      spacing0={10}
      renderItem={({ item }) => (
        <View
          style={([styles.itemContainer], [styles.itemContainer])}
          onStartShouldSetResponder={() => {
            clickboton(item.clickId);
          }}
        >
          <image style={{ width: "90%", height: "80%" }} source={item.image} />

          <Text
            style={{
              width: "100%",
              height: "20%",
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

const styles = styleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    alingSelf: "center",
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
    fontSize: 12,
    color: "#5d4294",
  },
});
