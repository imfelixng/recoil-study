import { Box, VStack } from "@chakra-ui/react";
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const darkModeAtom = atom({
    key: 'darkMode',
    default: false,
});

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
    return <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)}/>
};

const Button = () => {
    const darkMode = useRecoilValue(darkModeAtom);

    return <button style={{ background: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>My UI Buton</button>
};

const Atoms = () => {
    return (
        <VStack>
            <Box>
                <DarkModeSwitch />
            </Box>
            <Box>
                <Button />
            </Box>
        </VStack>
    );
};

export default Atoms;