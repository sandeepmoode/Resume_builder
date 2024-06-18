import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoMdMenu } from "react-icons/io";
import { Link as ReachLink } from "react-router-dom";
import logo from "./../../Assets/logo.png";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box id="navbar" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <ReachLink to="/">
            <Box>
              <img
                style={{ height: "44px" }}
                className="logo"
                src={logo}
                alt="logo"
              />
            </Box>
          </ReachLink>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <ReachLink
                px={4}
                py={2}
                rounded={"md"}
                _hover={{ textDecoration: "none", bg: "gray.200" }}
                to={"/"}
              >
                Home{" "}
              </ReachLink>
              <ReachLink
                px={4}
                py={2}
                rounded={"md"}
                _hover={{ textDecoration: "none", bg: "gray.200" }}
                to={"/about"}
              >
                {" "}
                About
              </ReachLink>
            </HStack>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon style={{ fontSize: "25px" }} />
              ) : (
                <SunIcon style={{ fontSize: "25px" }} />
              )}
            </Button>
          </HStack>

          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon />
              ) : (
                <i className="material-icons text-center">
                  <IoMdMenu size={25} className="text-center" />
                </i>
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ReachLink
                className="text-center p-2"
                px={4}
                py={4}
                rounded={"md"}
                _hover={{ textDecoration: "none", bg: "gray.200" }}
                to={"/"}
              >
                Home{" "}
              </ReachLink>
              <ReachLink
                className="text-center p-2"
                px={4}
                py={4}
                rounded={"md"}
                _hover={{ textDecoration: "none", bg: "gray.200" }}
                to={"/about"}
              >
                {" "}
                About
              </ReachLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
