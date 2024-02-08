import { Dispatch, SetStateAction, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Button, Card, CardBody, Checkbox, CheckboxGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Pagination, Radio, Textarea, button, RadioGroup } from "@nextui-org/react";

function App() {

  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => count - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-row p-4">
          <div className="p-6">
            <Button isIconOnly color="success" aria-label="Like" onClick={decrease}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </Button>
          </div>
          <Card>
            <CardBody className="p-10 h-80 w-80">
              {counter === 1 &&
                <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                  <p className="font-bold text-3xl">BanentOS</p>
                </div>

              }
              {counter === 2 &&
                <CheckboxGroup
                  label="Select your favourite Browser"
                  defaultValue={["firefox"]}
                  color="success"
                >
                  <Checkbox value="firefox">Firefox</Checkbox>
                  <Checkbox value="firefox-esr">Firefox ESR</Checkbox>
                  <Checkbox value="chromium-bin">Chromium</Checkbox>
                  <Checkbox value="ungoogled-chromium-bin">Ungoogled Chromium</Checkbox>
                  <Checkbox value="google-chrome">Google Chrome</Checkbox>
                  <Checkbox value="microsoft-edge">Edge</Checkbox>
                </CheckboxGroup>
              }
              {counter === 3 &&
                <RadioGroup
                  label="Select your AUR Helper"
                  color="success"
                  defaultValue="paru"
                >
                  <Radio value="paru">Paru (Rust)</Radio>
                  <Radio value="yay">Yay (Go)</Radio>
                  <Radio value="pikaur">Pikaur</Radio>
                  <Radio value="pacseek">Pacseek</Radio>
                  <Radio value="trizen">Trizen</Radio>
                </RadioGroup>
              }
            </CardBody>
          </Card>
          <div className="p-6">
            <Button isIconOnly color="success" aria-label="Like" onClick={increase} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </div>
        </div>
        <Pagination key="success" total={7} siblings={3} initialPage={1} page={counter} color="success" />
      </div>
    </>
  );
}

export default App;
