import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {


  return (
 


   
   
   <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' ,headerShown:false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'For you',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
        <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
 
  );
}
