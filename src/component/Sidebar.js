import React, { useState } from 'react'
import {CalendarFilled, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiStudentBold } from 'react-icons/pi';
import { BiBookBookmark } from 'react-icons/bi';
import { Layout, Menu, Button } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';
import Attendance from '../pages/Attendance';
import Courses from '../pages/Courses';
const { Sider, Content } = Layout;


export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
  
  return (
    <>
      <Layout >
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
          <div className="demo-logo-vertical" />
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <b className='ms-2' style={{ color: 'white', paddingTop: '5px' }}>Menu</b>
            <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64, }} />
          </div>
          <Menu theme="light" mode="inline"
        //   defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <LuLayoutDashboard />,
                label: <Link to="/">Home</Link>,

              },
              {
                key: '2',
                icon: <PiStudentBold />,
                label: <Link to="/students">Students</Link>,
              },
              {
                key: '3',
                icon: <CalendarFilled />,
                label: <Link to="/attendance">Attendance</Link>,
              },
              {
                key: '4',
                icon: <BiBookBookmark />,
                label: <Link to="/courses">Courses</Link>,
              },
            ]}
          />
        </Sider>
        <Layout  className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
          <Content style={{margin: '24px 16px',padding: 24,minHeight: "100vh",}}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/students' element={<Students />} />
              <Route path='/attendance' element={<Attendance />} />
              <Route path='/courses' element={<Courses />} />
              <Route path="*" element={<h1 className='text-center text-danger'>404 Page Not Found!</h1>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
