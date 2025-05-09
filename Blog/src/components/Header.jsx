import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  TextInput
} from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar className='border-b-2' fluid>
      <NavbarBrand as={Link} to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sudeep's
        </span>{' '}
        Blog
      </NavbarBrand>

      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          icon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className='w-14 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>

        <Link to='/sign-in'>
          <Button className='bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 '>
            Sign-In
          </Button>
        </Link>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href='/' active={path === '/'}>
          Home
        </NavbarLink>
        <NavbarLink href='/about' active={path === '/about'}>
          About
        </NavbarLink>
        <NavbarLink href='/projects' active={path === '/projects'}>
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
