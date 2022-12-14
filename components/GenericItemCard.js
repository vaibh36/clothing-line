import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

const GenericItemCard = (props) => {
    const itemName = props.name;
    const extension = props.extension;
    const itemText = props.itemText;
    const info = props?.info;
    const router = useRouter();

    const isDesktopView = useBreakpointValue({
        base: false,
        md: false,
        lg: true,
    });

    return (
        <Box
            border="2px solid black"
            {...(isDesktopView && {
                cursor: 'pointer',
                onClick: () => {
                    router.push({
                        pathname: `/detail/${props?.info?.name}`,
                        query: {
                            name: router?.query?.item,
                        },
                    });
                },
            })}
        >
            <Box position="relative" overflow={'hidden'} {...props}>
                <NextImage src={`/${info.name}.${extension}`} layout="fill" />
            </Box>
            <Flex
                flexDirection={'column'}
                gridRowGap={4}
                alignItems="center"
                mb="4"
                p="2"
            >
                <Text textAlign={'center'} fontWeight="bold">
                    {info.alt}
                </Text>
                <Button colorScheme="primary" maxW="sm">
                    Rs. {props?.info?.price}
                </Button>
            </Flex>
        </Box>
    );
};

export default GenericItemCard;
