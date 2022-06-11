/* created on 18 May 2022
   author: Merlyne Iradukunda Tamara
*/

import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { COLOURS } from "../../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableWithoutFeedback } from "react-native-web";
const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwic3ViIjoiMSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiQWRtaW4gVXNlciAwNzg4NjgzMTExIiwidXNlcm5hbWUiOiIwODgyODMiLCJtb2JpbGUiOm51bGwsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlLCJjcmVkZW50aWFsc05vbkV4cGlyZWQiOnRydWUsImFjY291bnROb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlfSwiaWF0IjoxNjUzNjQyMjIwLCJleHAiOjE2NTM3Mjg2MjB9.azGbxjIGb7-LRSxigh3N7hDGax1k8oBjx_wmpQ-PyKQjSSehh2i7EPgqkDb-gqcu_QR7aHU3Wn5dBmpnNnU0fw";
const ProductCart = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [total, setTotalPrice] = useState(0);
  const [data2, setData2] = useState([]);
  const [quantity, setQuantity] = React.useState(0);

  function Total() {
    let sum = 0;
    data.forEach((item, i) => {
      sum += data.price;
    });
    return sum;
  }

  const getMenuFromApi = async () => {
    try {
      const response = await fetch(
        "http://196.223.240.154:8099/supapp/api/menu-items"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const makeOrder = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    };
    fetch("http://196.223.240.154:8099/supapp/api/orders", requestOptions)
      .then((response) => response.json())
      .then(() =>
        setData2([{ itemId: data2.item, quantity: data2.quantity }])
      );
  };

  useEffect(() => {
    getMenuFromApi();
    // makeOrder();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={data.content}
          keyExtractor={({ id }, index) => id}
          //setitem id 
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
                    Frw {item.unitPrice}{" "}
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
                        // onPress={() => {
                        //   decrementQuantity();
                        // }}

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
                        {quantity}
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
      )}
    </View>
  );
};

export default ProductCart;
