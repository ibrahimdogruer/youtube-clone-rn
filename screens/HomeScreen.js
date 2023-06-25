import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from 'react-native-feather'
import { categories, shortVideos, videos } from '../constants/index';
import VideoCard from '../components/videoCard'
import ShortVideoCard from '../components/shortVideoCard'

const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState('All')

    return (
        <View style={{ backgroundColor: themeColors.bg }} className="flex-1">
            {/* logo and profile icon */}
            <SafeAreaView edges={['top']} className="flex-row justify-between mx-4">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../assets/icons/youtubeIcon.png')} className="h-7 w-10" />
                    <Text className="text-white font-semibold text-xl tracking-tighter">
                        YouTube
                    </Text>
                </View>
                <View className="flex-row items-center space-x-3">
                    <Icon.Cast stroke="white" strokeWidth={1.2} height={22} />
                    <Icon.Bell stroke="white" strokeWidth={1.2} height={22} />
                    <Icon.Search stroke="white" strokeWidth={1.2} height={22} />
                    <Image source={require('../assets/images/avatar.png')} className="h-7 w-7 rounded-full" />
                </View>
            </SafeAreaView>

            <ScrollView className="flex-1 -mt-6" showsVerticalScrollIndicator={false}>
                {/* categories */}
                <View className="py-2 pb-5">
                    <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
                        {categories?.map((cat, index) => {
                            let isActive = cat === activeCategory;
                            let textClass = isActive ? 'text-black' : 'text-white';
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{ backgroundColor: isActive ? 'white' : 'rgba(255, 255, 255, 0.1)' }}
                                    className="rounded-md p-1 px-3 mr-2"
                                    onPress={() => setActiveCategory(cat)}>
                                    <Text className={textClass}>
                                        {cat}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>

                {/* suggested Video */}
                <VideoCard video={videos[4]} />

                {/* short videos */}
                <View className="mt-2 py-5 space-y-3 border-t-zinc-700 border-b-zinc-700 border-4 border-r-0 border-l-0">
                    <View className="mx-4 flex-row items-center space-x-2">
                        <Image source={require('../assets/icons/shortsIcon.png')} className="h-6 w-5" />
                        <Text className="text-white font-semibold text-xl tracking-tighter">
                            Shorts
                        </Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                        {
                            shortVideos?.map((item, index) => <ShortVideoCard item={item} key={index} />)
                        }
                    </ScrollView>
                </View>

                {/* videos */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        videos?.map((video, index) => <VideoCard video={video} key={index} />)
                    }
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default HomeScreen
