import React from 'react';
import {Box} from "@mui/material";
import HeadingWithDescription from "../common/HeadingWithDescription";

const IntroSection = () => {
    return (
        <Box sx={{
            display: 'flex',justifyContent: "center",
            background: (theme) => theme.palette.secondary.main,
            color: '#fff',
        }}>
            <HeadingWithDescription
                sx={{
                    textAlign: 'center',
                    maxWidth: '50rem',
                    py: '6rem',
                }}
                heading={'Fang Who?!'}
                description={[
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus dicta dolor dolorem, doloribus error esse molestiae nulla pariatur quae quidem rerum tempora temporibus vel veniam. Adipisci dolorem libero molestiae.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus dicta dolor dolorem, doloribus error esse molestiae nulla pariatur quae quidem rerum tempora temporibus vel veniam. Adipisci dolorem libero molestiae.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus dicta dolor dolorem, doloribus error esse molestiae nulla pariatur quae quidem rerum tempora temporibus vel veniam. Adipisci dolorem libero molestiae.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus dicta dolor dolorem, doloribus error esse molestiae nulla pariatur quae quidem rerum tempora temporibus vel veniam. Adipisci dolorem libero molestiae.',
                ]}
            />
        </Box>
    );
};

export default IntroSection;