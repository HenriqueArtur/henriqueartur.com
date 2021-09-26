import React from "react";
import { Dropdown, Nav, Sidenav, Toggle } from "rsuite";
import { Dashboard, Shield, Creative, Tag } from '@rsuite/icons';

export function Home() {
  const [activeKey, setActiveKey] = React.useState('1');
  return (
    <div style={{ width: 240 }}>
      <Sidenav
        expanded={false}
        defaultOpenKeys={['3', '4']}
        activeKey={activeKey}
        onSelect={setActiveKey}
      >
        <Sidenav.Header>
          <div>henrique artur</div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Dashboard />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Shield />}>
              Shield
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Creative />}>
              Creative
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<Tag />}>
              Tag
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}