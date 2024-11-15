import Data from '../Data/Data';
import React, { useState } from "react";
import { FacebookEmbed } from "react-social-media-embed";
import { SimpleGrid, Button } from '@chakra-ui/react'
import { FacebookProvider, EmbeddedPost } from 'react-facebook'
const Facebook = () => {
    const intialPosts = 3;
    const [noOfposts, setnoOfPosts] = useState<number>(intialPosts);
    const remainingPosts = Data.facebookData.length - intialPosts
    const loadMore = (): void => {
        noOfposts == intialPosts?
        setnoOfPosts(noOfposts + noOfposts) : setnoOfPosts(intialPosts)
    };
    const slice = Data.facebookData.slice(0, noOfposts);
    return (
        <>
        <div style={{  padding: "10px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", justifyContent: "center", overflow:"none"}}>
            <SimpleGrid margin = "auto" columns = {3} spacing = {20} minChildWidth={320}>
            {slice.map((item: { url: string; width: number }, index: number): JSX.Element => {
                return (
                   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FacebookProvider appId="your-app-id">
                        <EmbeddedPost href={item.url} width="400px" showText={true} />
                    </FacebookProvider>
                 </div>);
            })}
            </SimpleGrid>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "10px" }}>
            <Button
                loadingText="Loading..."
                border="solid 1px maroon"
                width={"50%"}
                height={"40px"}
                fontFamily={"inherit"}
                borderRadius={"10px"}
                fontSize={'sm'}
                fontWeight={600}
                color={'maroon'}
                bg={'transparent'}
                _hover={{
                  bg: 'maroon',
                  color: 'white'
                }}
                alignSelf={"center"}
                onClick={() => loadMore()}>{noOfposts >intialPosts ? "Show less" : "Load more"}
            </Button>
            </div>
            </>
    )
}
export default Facebook






























































// import React, { useState } from "react";
// import { FacebookProvider, EmbeddedPost } from 'react-facebook'
// import { SimpleGrid, Button } from '@chakra-ui/react'
// import Data from '../Data/Data';
// const Facebook = () => {
//         const intialPosts = 3;
//         const [noOfposts, setnoOfPosts] = useState<number>(intialPosts);
//         const remainingPosts = Data.facebookData.length - intialPosts
//         const loadMore = (): void => {
//             noOfposts == intialPosts?
//             setnoOfPosts(noOfposts + noOfposts) : setnoOfPosts(intialPosts)
//         };
//         const slice = Data.facebookData.slice(0, noOfposts);
//     return (
//     <>
//     <div style={{ display: "flex", justifyContent: "center", padding: "10px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", overflow:"none"}}>
//     <SimpleGrid margin = "auto" columns = {3} spacing = {20} minChildWidth={320}>
//         {slice.map((item: { url: string; width: number}, index: number): JSX.Element => {
//         return (
//             <div style={{ width: "400px", height:"100%" , margin: "10px", overflow: 'hidden', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                 <FacebookProvider appId="your-app-id">
//                     <EmbeddedPost href={item.url} width="400px" showText={true} />
//                 </FacebookProvider>
//             </div>);
//         })}
//     </SimpleGrid>
//     </div>
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "10px" }}>
//         <Button
//                 loadingText="Loading..."
//                 border="solid 1px maroon"
//                 width={"50%"}
//                 height={"40px"}
//                 fontFamily={"inherit"}
//                 borderRadius={"10px"}
//                 fontSize={'sm'}
//                 fontWeight={600}
//                 color={'maroon'}
//                 bg={'transparent'}
//                 _hover={{
//                   bg: 'maroon',
//                   color: 'white'
//                 }}
//                 alignSelf={"center"}
//                 onClick={() => loadMore()}>{noOfposts >intialPosts ? "Show less" : "Load more"}
//         </Button>
//     </div> 
//     </>
//     );
// }
// export default Facebook;

