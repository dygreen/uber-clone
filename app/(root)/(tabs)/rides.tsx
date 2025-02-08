import { View, Text, Image, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";
import { images } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
import { useFetch } from "@/lib/fetch";
import { Ride } from "@/types/type";

const Rides = () => {
  const { user } = useUser();
  const { data: recentRides, loading } = useFetch<Ride[]>(
    `/(api)/ride/${user?.id}`,
  );

  return (
    <SafeAreaView>
      <FlatList
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled" // 키보드가 올라와있는 상태에서 버튼 클릭 가능
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <Text className="text-2xl font-JakartaBold my-5">All Rides</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Rides;
