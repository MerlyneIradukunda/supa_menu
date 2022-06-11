/* created on 18 May 2022
   author: Merlyne Iradukunda Tamara
*/

import {
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import { COLOURS, products } from "../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import ProductCart from "../components/Cart/ProductCart";

const ITEM_HEIGHT = Dimensions.get("window").height;

function CartScreen({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <View>
        {/* Navigation */}
        <View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              padding: 16,
            }}
          >
            <View>
              <TouchableOpacity>
                <Entypo
                  name="chevron-small-left"
                  style={{
                    fontSize: 30,
                    color: COLOURS.orange,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: COLOURS.backgroundLight,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginBottom: 5,
              paddingEnd: 40,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 27, fontWeight: "600" }}>
              Choose Kigali
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "300",
                paddingTop: 15,
                height: "100%",
                color: COLOURS.orange,
              }}
            >
              Drinks
            </Text>
          </View>
        </View>
 
        <ScrollView
          showsHorizontalScrollIndicator={true}
          style={{
            marginTop: "5%",
            paddingEnd: 4,
            height: ITEM_HEIGHT / 2.8,
          }}><ProductCart />
      
         
        </ScrollView>

        <View
          style={{
            flex: 1,
            height: "100%",
            padding: 20,
            alignItems: "center",
            backgroundColor: COLOURS.white,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                marginTop: "10%",
                color: COLOURS.orange,
              }}
            >
              <Text
                style={{
                  fontWeight: "450",
                  padding: 10,
                  width: 30,
                  fontSize: 18,
                  marginVertical: "5%",
                }}
              >
                more drinks
              </Text>
              <Entypo
                name="arrow-long-right"
                style={{
                  fontSize: 25,
                  padding: 10,
                  marginTop: "2%",
                  backgroundColor: COLOURS.white,
                }}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/* total */}
        <View
          style={{
            width: "100%",
            marginVertical: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "500",
              display: "flex",
              width: "80%",
              height: 40,
              marginHorizontal: "10%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            Total
            <Text
              style={{
                display: "flex",
                width: "80%",
                color: COLOURS.orange,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              Frw
              {/* {total} */}
            </Text>
          </Text>
        </View>

        <View
          style={{
            width: "70%",
            marginHorizontal: "15%",
            marginVertical: "5%",
          }}
        >
          <TouchableOpacity>
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 15,
                height: 50,
                elevation: 3,
                backgroundColor: COLOURS.orange,
              }}
              onPress={() => {
                navigation.navigate("CheckOutScreen", {
                  checkoutPrice: total,
                  data,
                });
              }}
            >
              <Text
                style={{
                  color: COLOURS.white,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Proceed to checkOut
              </Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartScreen;
