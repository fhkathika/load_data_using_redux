// import React from 'react';
// import useGetData from '../hooks/useGetData';
// import SingleBlog from './SingleBlog';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { experimentalStyled as styled } from '@mui/material/styles';
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  
// const Blog = () => {
//     const [posts,users,commnets,pic]=useGetData()
//     console.log('posts',posts);
//     console.log('users',users);
//     console.log('commnets',commnets);
//     return (
       
//              <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         { posts?.map(posts=> <Item><SingleBlog key={posts.id} posts={posts}></SingleBlog></Item>)}
        
//       </Grid>
//     </Box>
   
//     );
// };

// export default Blog;
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { PostAddSharp } from '@mui/icons-material';
import useGetData from '../hooks/useGetData';
import SingleBlog from './SingleBlog';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    const [posts,users,commnets,pic]=useGetData()
   
        console.log('posts',posts);
        console.log('users',users);
        console.log('commnets',commnets);
  return (
    
         <Box sx={{ flexGrow: 1,m: 2 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {posts?.map((posts) => (
              <Grid item xs={2} sm={4} md={4} key={posts.userId}>
                <SingleBlog posts={posts}/>
              </Grid>
            ))}
          </Grid>
        </Box>
          
     
   
  );
}