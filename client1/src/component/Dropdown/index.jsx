import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function App({chucnang}) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" style={{fontSize:"16px"}}
        >
          Công Ty
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        // onAction={(key) => alert(key)}
      >
        <DropdownItem key="new"> <a href="/Postadmin">{chucnang[0]}</a></DropdownItem>
        <DropdownItem key="copy"> <a href="/AddPost">{chucnang[1]}</a></DropdownItem>
        
   
      </DropdownMenu>
    </Dropdown>
  );
}

// <DropdownItem key="delete" className="text-danger" color="danger">
// Delete file
// </DropdownItem>