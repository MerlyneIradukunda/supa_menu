import {
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLOURS } from "../database/Database";
const ITEM_HEIGHT = Dimensions.get("window").height;
import Entypo from "react-native-vector-icons/Entypo";

import { Dimensions } from "react-native";
const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  function incrementQuantity(id) {
    setData((prevCart) =>
      prevCart.map((cart) => {
        return cart.id == id
          ? {
              ...cart,
              price: cart.unitPrice * (cart.quantity + 1),
              quantity: cart.quantity + 1,
            }
          : cart;
      })
    );
  }

  const getMenuFromApi = async () => {
    try {
     const response = await fetch('http://196.223.240.154:8099/supapp/api/menu-items');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
 
  useEffect(() => {
    getMenuFromApi();
    
  }, []);

  return (
 
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView
        style={{
          marginTop: "5%",
          paddingEnd: 4,
          height: ITEM_HEIGHT / 2.8,
        }}
        >
          <FlatList
            data={data.content}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 10,
                  backgroundColor: COLOURS.backgroundLight,
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: 10,
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "3%",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "100%",
                    padding: 5,
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    source={{
                      uri: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772",
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "80%",
                    height: "100%",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      color: COLOURS.backgroundMedium,
                      fontSize: 12,
                      fontWeight: 400,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: COLOURS.backgroundDark,
                      fontSize: 15,
                      fontWeight: 500,
                      marginVertical: "3%",
                    }}
                  >
                    {item.description}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: COLOURS.orange,
                      fontSize: 17,
                      fontWeight: 600,
                    }}
                  >
                    <Text style={{ paddingVertical: 5 }}>
                      Frw {item.unitPrice}
                    </Text>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "60%",
                        height: "10%",
                        marginLeft: "10%",
                        paddingHorizontal: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            marginRight: 20,
                            padding: 4,
                          }}
                        >
                          <TouchableWithoutFeedback
                            onPress={() => {
                              decrementQuantity();
                            }}
                          >
                            <Entypo
                              name="minus"
                              style={{
                                fontSize: 19,
                                color: COLOURS.orange,
                                padding: 3,
                                borderRadius: 3,
                                backgroundColor: COLOURS.white,
                              }}
                            />
                          </TouchableWithoutFeedback>
                        </View>
                        <Text style={{ color: COLOURS.backgroundDark }}>
                          {item.quantity}
                        </Text>
                        <View
                          style={{
                            marginLeft: 20,
                            padding: 3,
                          }}
                        >
                          <TouchableWithoutFeedback
                            onPress={() => {
                              incrementQuantity();
                            }}
                          >
                            <Entypo
                              name="plus"
                              style={{
                                fontSize: 19,
                                color: COLOURS.orange,
                                padding: 3,
                                backgroundColor: COLOURS.white,
                              }}
                            />
                          </TouchableWithoutFeedback>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
