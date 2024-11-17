'use client';  // Ensure this is at the very top of the file

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import close icon
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling
  const router = useRouter();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate to the home page and scroll to a specific section
  const scrollToSection = (section) => {
    if (router.pathname !== '/') {
      router.push(`/#${section}`);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add event listener to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);  // When scrolled past 100px, set to true
      } else {
        setIsScrolled(false); // Otherwise, set to false
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  // <div className="relative w-full h-full">
    <header className={`fixed w-full m-auto top-0 z-50 h-30 transition-all duration-300 ease-in-out  bg-[#78B7D0] ${isScrolled ? 'py-0 lg:py-2' : 'py-2 lg:py-4'}`}>
    {/* <video
      
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/images/bg.mp4" type="video/mp4" />
    </video> */}
      <div className="flex items-center justify-around">
        {/* Logo Section */}
        {/* <div className="flex items-center justify-around space-x-0 lg:space-x-4"> */}
          <Image
              src="/images/vrseclogo.png"
              alt="VRSEC Logo"
              width={isScrolled ? 130 : 140}
              height={isScrolled ? 130 : 140}
              className="rounded-full  object-contain transition-all duration-300"
              loading="lazy"
          />
          <div className={`lg:block lg:text-center transition-all duration-300 ease-in-out ${isScrolled ? 'text-base lg:text-4xl ' : 'text-xl lg:text-4xl'}`}>

            <h2 className={`font-bold ${isScrolled ? 'text-[#16325B] ' : 'text-[#16325B]'} `}>
              Velagapudi Ramakrishna<br></br>Siddhartha Engineering College
            </h2>
            <h2 className={`text-sm font-normal ${isScrolled ? 'text-xs lg:text-lg text-[#16325B] ' : 'text-lg lg:text-xl text-[#16325B]'}`}>
              (Deemed to be University)<br></br>
              Kanuru, Vijayawada, Andhra Pradesh, 520007.
            </h2>
          </div>
        {/* </div>
        <div className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-2' : 'space-x-4'}`}> */}
        {/* <div className="hidden lg:block">
            <Image
              src="/images/ITlogo2.png"
              alt="Information Technology"
              width={isScrolled ? 120 : 140} 
              height={isScrolled ? 120 : 140}
              className=""
            />
    
          </div> */}
          <div className="flex items-center justify-evenly space-x-5">
          <div className="hidden lg:block">
            <Image
              src="/images/springer2.png"
              alt="springer"
              width={isScrolled ? 140 : 140} 
              height={isScrolled ? 140 : 140}
              className="bg-white/90 rounded-lg"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfIkiMHtEZmhUmWnvIfSEXP3cPOnYSL_gnucq1KEYNuErxA_zPfdedSAU7u-GRiFvpRM&usqp=CAU"
              alt="nirf"
              width={isScrolled ? 140 : 140} 
              height={isScrolled ? 140 : 140}
              className="bg-white/90 rounded-lg"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwkHCQ0ICAgKCAgICg0KCAgJBg8ICQYLIB0iIiARHx8kKEAsJCYoJx8TIUAtMSw3Ojo6Iys/RD84QzQ5LjcBCgoKDg0OGhAQGjclHxk3NzcsNzc3NystNys3LTctLS0rLSs3Ny03NysrKysrNzcrLSsrLS0rKysrKy0rKy0rK//AABEIAKABBAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAFAQAAEDAgIEBgwJCQYHAAAAAAEAAgMEBQYREiExURMUNUFhsRUiI0JxcnOBobLB0SUyM1JUYpHh8CREY3SEk5Si8RY2Q4KSpAcmRVNVZIP/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAOREAAgECAQcJCAICAwEAAAAAAAECAwQRBRIhMUFRgRMyMzRhcZGhsSIjQlLB0eHwFFMVQyRi8UT/2gAMAwEAAhEDEQA/APtCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgKTfK6qhuEwjqpo2Mc3RY2Z2jsGrJWIRTieeu61WNaSjLDDt7CXsF94zlTVbgJ9kchyYKno8K0nDDStResr7lPYqaHse8n1EdMIAgCAoOJK2qhuUzIquoiY3RyZHUuY1uoLqW8IOmm15Hmr6tONeSUmlo2vcjrudXUMsdHKyolbLLJ20jZ3B8gyO0/YsUacXXkmtBNcVais6UlLS9uLx2mnB1ZUz3AsmqZ5WcA8hklS6RulmNetb3tOEaWMVg+41yZVqSrYTk2sNrYvVXVRV00bKuZrGydq1k7mBoy2alRglmrQYuqtSNaSUnh3s4uP1n02o/iXrfCO4rcvV+d+LAuVdEdJtbOD32lO6Rv2FbQhBvUZVxWjpU2b6fFNygPbuZUtB1tkjDS4eEKyrSlNbiSGU68H7Wnv8AwWiyYgprt3NoMFSBmaeRwJcN43qncWs6Wl6VvOza39OvoWh9v03kber5XU876ZkbKcAdrI7ujpG/OHMo4Qi1jiVLu9rU5uCWG56yEnuVZN8tVyEbAGyGMehSKC3HOnc1p654+RpFTMNYnkB+rO4FZzVuI1UmtUsOJ2wXivjyAqpHNbzSaMnXrVmlQpzWlFiF5WjqnjhvJWjxQ8HRq4WuaTkZIdRjG/IrWpYr4H4lyllRrpFo3r7FjpqmKqjEsEjZGHna74p3LnzhKDwksGdanUjUjnReKNq1NwgCAIAgCAIAgCAIAgCAIChYh5Rn8dvqhWYc1Hmb3p58PREfkW5OIIaTqcWkBxUi0lbSsH4Fow/fuE0aSscTIToxTnZJ0H3qCdPajs2V9nYU6mvY95ZVCdYIAgPnWKeVJvCwfyhde1XukeWyh1iXD0R1XY/ANBl8/wBhWKK9/MluOpUv3eacEH4T6DTv9ikvuh8DTJL/AORwZMXO601PVSxSWuGZ7XgGR+WlNq27Fy4wbWsvV7qnCrKLpJ4bdH2OB91oHHM2eME7QKlzR6At1GW8ru5ot48kvH8GD71bx2r7LCYwMjoy9s30KeFvKS0TNXdUdTorDvHY+23ph7FSOpaxjS7iVQ7tZekfcpuUrUGuUWMd5lW9C5j7h5stzK33akmyBfBU079R2PgkC6eEJx3xZyvbpSeyUfUv0b6K+UEVxq2uBpWOFRweecbhtGrm515+rTlRquC4Ho06N1RVaoubrw8+G0jzcbRH2sNrdIwbXSOA0unnWubN62VXcWsdCpY9/wCsxF0tZ22ZoPRI1ZUJPaYV1b/1G1s1jqu0fTS0bj/iBupp8xPpVmEa8NMXib59pV0OLi9/636HPcrO6lj4zBI2qpQPlGu7aPwqejcqcs2SwZHcWkqceUg8Y79potVwkt8/CDN0ZyEsY2SN9/Ot69FVY4bSO3uJUZ52zb2/kvjHCRoc05tcA4Ed8FxWsHgejTTWKPVgyEAQBAEAQBAEAQBAEAQFCxDyjP47fVCsw5qPM3vTz4eiJe0spJLSI60gRS1DmB51cFIdhz5lHLHP0HQtVSdslU1N4EJeLXNbZNEjhIXa4Z+9cN3hVinNSOZdWsqMsHzXqZL4cv8Alo0da/VqENQ92ej9UnqUdWjtidCyvsHydV9zZalWOyEB86xTypP0Fh/lC7Np0SPLX/WJ8PRHVd9VhoPHPUVrQ6xMluOpUv3eacED4Tz/AED/AGKS/wCh8DTJPWODLBX4a43USVAqyzhn6RaYs9H0rkxqYLDA6dbJ3KVHPOwzuw0HCTj+e/7b71nluwi/xP8A38vyaJ8GyOBLK5pcAdEOpsg47tqnhdqOtGk8jtrRPy/JUS6a31Ok0mOppZDkO+a8HZ7F20o1YYPTGX1OJjOlUztUo+qJzGDI5xS3SFmiLhADJlq0nZAj0HLzKnYNxz6b+E6WU4xlydaK560ndgF2myqpXjONwY4gt1a8wocppJxkT5H9qNSD7PPQdkWEchk+tdns7nAAue63YTLJS2y8j12Eh3tY7Pe+AFFWw2GXkpbJ+RHV9iq6FpkGU8I1l0fxoxvIV+3uYS0amVa1hVpLFaV+7DCy17qKYMcWmnneGTRu+LonvvCpbiipwb2x1GtrXdKaXwy1rYeXqk4lVviaM4zlLEPqHm8xzCW1TlKae0xdUeSqtLVrRY8L1XD0fBEkvpXcGc/m83o1Ln3lPNqY/MdbJ9TPopfL+omFVLwQBAEAQBAEAQBAEAQBAULEHKM/jt9UK1T5qPM3vTz4eiOh5+AWgc9bk76ywukJm8LHiLRdIpojbrn3Smd2sUj8vybctp02vaiLa5jKPI1tMXoT3fuxnDerTLbX6+6078+Cm5nfVPT+PBNRqKfeVru1lRlp0xep/TvJTD+IjCW0lc4uiOTYp3bYjuPQo61vjjKJbssoOOFOpq37u/sLcDnrBzB1ghUjvJnzvFHKk/8Ak9ULs2q90jy2UOsT4eiOi7nOwUHjnqK1odYmS3HUqX7vNeCD8J5foJPYpL/ofA0yS/8AkcGXaW5UcTzHJVwskYcnMdO0OaVxc1noZXFGLwlJJ95j2WoPptP/ABLUzXuNf5dD514muW+22Jpc6thIaM8mSiRzvMFIqNSWpGsr2hFYua8T5vdavj1XNVgaImkLms0Rm1mwDw5ZL0NCHJ04wezX6nlbio6tWU8NenD0/JM4pBpqG3UDyOEiptKT6pyA96qWTz6tSotpfyj7ulSpPYtJ2f8ADwHTqjkcsogTzZ61FlR6IcfoWMirTU4fUui5J3QgPHDMEEZgggg98sow1ij5vI0NcQAAA5wA6M16Bc1HlGtP7vJzFWt1O7vjBrPO5VLLVNdp0co64PsOzB3yc3lGj0KC/wCdEnyXzJcCwqgdQIAgCAIAgCAIAgCAIAgKDiHlGfxx6oVmnqR5m96efD0R0ScgNP8A7qR6UlfUV3kETzehWYnPbJqzXiNrOx9yHCUMnatdJrNN93P0dWlSi8c6Gsv2t5FLkq2mD1N7Pwct7s7rc8PYTNRyjOGduR0RzNKlo1lPsaILq0dGWK0xep/T91nbhvEHFCKSrcTSk5RSuzzpDu8HUtK9tnLOjr3FmwvuSwpz5u/d+PQjcSyNkuU743tkaSwtexwc1w0QrVqsKKxKl+068mtOr0R1Xb+79B456itaHWahPcdSpfu814HPwn/8H5+hb3/Q+BpknrHBnfeLTWTVs0kVLI+OSTSa8aOTtXhXLjUSitJYubWtKtKUY4p9xx9hbh9Ck/l962VRbyv/AA6/yehoksVzfsopN2Xaj2q3Sr04/F5Gjsq7+D0OuisMVpIuF5lYxkTtKGkZ3QzvGz+i3qXTqrk6K4lijYxoYVbl4KOpEHd699zqn1Uo0Q8hrGB3yUY2D8byr1CiqUMxcTm3FxKvUdR7dC7i84Lo20tubIHMe6qdwzix2YjGwNXFvqjnVw2R0HosmUVTo4687STypnSCA8QM+cTfGd47+tehWpHk3rZN4q/NvIKpZfH3nRyj8HcdmD/k5vHb1KC/5yJ8l8yXAsKoHUCAIAgCAIAgCAIAgCAICg4h5Rn8dvqhWqfNR5m96efD0RvfyCDzGt1LMOlJP/i4nNh6lhrawQVDBJGY3nR0iDnv61JVk4wxRHZUo1a2bPStJ5fbNJa36Te6Uz3ZRy6OuLoK3o1lPRqfqYvLOVB464vU/ozOzXhsMfEa9vD0EzdHItzNF93P0LNWhj7cNDRva3ajHkq2mD8jTfrM63kTwnh6GRwdHMMzwQPMfYVJb1uU9l6yO7s3S9uOmL1MhiecagdeStrSUGT91/u/Q+WPU5VqPWZ/u46dx1Kl+7zXgflT9nf7Fvf9D4GmSescGSN5u9dBWzQxVBZHG8Na0NadEZDoXKjBOK0Fq6u60K0oxlhgcfZy4/Snfu2+5bcmtxX/AJ1f5vT7GmW/XEbKuQf5WqzRoweuJG72vjz/AE+xnTYrq29yr4o66mf2sjXwiOVzOo/YrDsItYweDN6eVKi9mss5d36vI0X23UpgZdLYSaOaQskhLT+SSbujd9m9S21apnOlV5y1PeaXdvTzFXo82WtbjowRcjTVfEnk8BVk6A5ophz+cexaZQo58M9a4+n/AKSZKuHTqcm+bLV2P8o6bzVV1DVyQCtm0A4Oj7oc9A6/u8y5cUnHHAkuqtalVlFTfZxOMXWuH55N55VuoLHUQfyq3zMzF1rj+eS5eUV2nRptc0yrqs/iZynXrzzJ25u15q0RaWTmKdfFiNhgVOy+PvOjlH4O47MH/JzeO3qUF/zkT5L5kuBYVQOoEAQBAEAQBAEAQBAEAQFBxFquM/S5vqhWqfNR5m96efD0RvdyAz9dPtWV0pI+orv+5rwlyizyUikuF7sxk3p1x9C8TRMmYYpWNkjkBa9jm5hw3Kim08UehnGM4uMlimUHEFjfbHmRhdJSPPaSHWYnfNd711Leuqmh6zzN5Yug8Vpjv3djFivXEQaOrHD26TNr43N4QwZ8/g6Pwc17fP8Aajokja0vOT93U0wls3fgwv8AZuJZVlI/jNvnOccgcHcWB5vBuW9vX5TGEtEvU0vbPkveQ0xlt3fuw3XYf8v0Plj1OWaHWan7uJbjqVL93mrBBzun7PJ7FvlDoPA0yT1jgy7T2qinkMstNHJI8guc7PNxXDTZ352tGcs6UcWYdhLf9Di/0lZznvNf4VH5TF1htrtRoozn9UrZVprUzDsaD1wKTiy1R2qpY2BzuBnYXtY52ZgIOxduxryqxed8J5/KNrChUShqlpw3HuGHcNHW29wzjno3TAHZHI3n9LfsS7jmyp1NqeBtYPOjVpbJLHiiLtTnMq6d4JBE8RB6cwrNZY05rZpKdu2qsGt68y9YkqKSnmYZ6BlVI+M5PdNwZa0HZ6SvNwTepnob+pShNZ8M7EiBcrfz2aP+JPuUijJfEUf5FD+rzMxcbcdtnj/f/crVOFV6p4Gf5Fv/AFeZ6bhb9os0ZHl1NyNZ/wCwzy9D+rzN+KSDxYtGi005LW/9sblpZaM5PeS5QwfJ4asPsdmD/k5vHb1KG/5yJ8l8yXAsKoHUCAIAgCAIAgCAIAgCAICgYj5Rn8ZvqhW6XNR5m+6efD0Rvec7C0bq3L0LK6R9xI+o8TDCJzuLPJyKS46M1yd064+he1zz0hhLEydjo5GiSORpa9jm5hw3LKbTxRrOEZxcZLFMoGJLG+1O4aHSfRPcA0nNxpnfNPv/AAeva3CqrB6H6nmr+ylRedHTH07PszVYr263/k1QOHt85LZYXN0uCz5x7QpK1tyqTjokjWzu3SeZJYwlrW7u+qJbFsUENrpW0jgaYT6URa7SboFp1KCxcnWln69pcylGnG3pqnzdngyMwNrun7PJ7FYyj0HgVck9Y4Ms9XiWKmnkgNPI4wvLS4SNAcd64yptrHE6tXKMac3Bx1Gn+1kP0WT941Z5LtI/8tD5fQ1y4wjZso5HeGdoUsLVy2mHlaK+DzRVb7dpLtUCaRgjZGwthja7T0B712bShGjDBPFs413dSuKik1hhoS/J2WQdjqCrucg+Wj4lRdtrlkO09X+kqK4fK1YUls0vswLFp7qhUrv4tC7W/wB8iPsEBnuFNGA52U7HODe9A1k+hWLmajSk+/zKtpDOrQit6fBF7vllkucrJGzsjbHHohroy4uOa85Ceaeiu7OVeSalhgRv9k5vpbP3LlJyy3FT/FT+byMhhSUbauPLogcpoXSjsMrJctsvIgHt0SW5g5EtzGxy6qZzGsNBNYl2Un6r7lTtNc+/7nQv9VPu+x3YO1xTH9I3qUF/zkWcl8yXAsKoHUCAIAgCAIAgCAIAgCAICgYk5Rm8ZnqhXKXNR5i96efD0RvfyA39ePtWV0r7iV9RXea8Icos8nIt7jozXJvWPH0RfFzz0gQGMsbJmGORoex4LXNc3MOG5ZTaeKMNKSwelM+fYmsD7aTPT6T6KQnXtNIdx6NxXatbpVVmy53r+TzF9YOi86HNfl3/AEfiQjp5TEKcyOMDHmRsZdm2N+9XYwipZ2GkocpJxUMdC04E1gblTwU8nsVTKPQeB0Mk9Y4Ml7pbKearlldc6eJz35mN3xozu2rkRk0tRcuLanKrKTqJN7HsOXsPTf8AlqX8edbZ73EP8On/AGo1S2SnP/V6MHmJ/qp6dZx+E0lZU3/tRo4nZqLuk9a+4yN1impouCjkO4n71bVavUWEVm9rI+StKWmU87DYtXiRt3ustxLWlkcFNTg8WpY26EUQ3q1Qt40k9retla4upV8FqitSWwseBLW4F1ykBAc0w02f+I3nd7PtVDKVfH3a4nUyRbNY1pdy+rLkuUd0IDw7PMiDPm8vxneM5eijqR5Oetk1iX4tJ+q+5U7TXPv+5fv/APX3fY7sHfJT+O3qUF/zkWcl8yXAsKoHUCAIAgCAIAgCAIAgCAIChYjY43GYhjyNJmsRuI+KFdpP2DzV6ny89G70RukY82BrQx5dx3PIRnPLeia5UkcW7HDDaa8IMc24tJa4ARSZktIC3uMOTNMmp/yNW8va556QIAgMZI2yNMb2h7HtLXNc3NsjdyyngYaUlg9TKBifDslvLqqlaX0Jy0mjMvpOg7wu3aXiqLMnzvX8nmr/ACe6OM6a9n0/BjgblTPI5cXfr0T0LOUWuR8DGSescGdlztdbLVzSMo5HsfK5zXBoycN65UZxUVpJbi1qyqyahoZy9hq/6DJ9jVtykd5F/Dr/ACGL7NXnZQy+HRC3hUinpZq7Ov8AIahh65zO0RRvbn30jmta1W4XNKK0yNVYXEnhmeOBMWjBmi4S3ORsmWsU0TjoO8YrStlFtYU9Hb9i/bZIwedWePYtX72Fva0NAa0ANAAaBqDRuXLbxO2kksEerBkIDw60DPn8lDVaTjxWbW52XcHLuxq08F7XmeXlRq6fYfgTV+oqmpbTcDA+Tg6fRfotHc3atSqW1WEXLOeGLOheUak1TzY44L7HZhelmpo5RPE+IukaWh7ctIKG9nGclmvEnydSnTjJSWBNqmdEIAgCAIAgCAIAgCAIAgPCAdoCDAZc2WrcgAAGwAIYwPUMhAEAQHh16iMwdoKABoGsNAPQ3JZxMJJHqwZCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID/9k="
              alt="nba"
              width={isScrolled ? 140 : 140} 
              height={isScrolled ? 140 : 140}
              className="bg-white/90 rounded-lg"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="data:image/jpeg;base64,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"
              alt="naac"
              width={isScrolled ? 120 : 140} 
              height={isScrolled ? 120 : 140}
              className="bg-white/90 rounded-lg"
            />
          </div>

          </div>
          
          
          {/* <div className="hidden  lg:block">
            <Image
              src="/images/rclogo.png"
              alt="Research conclave"
              width={isScrolled ? 80 : 100} 
              height={isScrolled ? 80 : 100}
              className="rounded-full border-2 border-yellow-300"
              objectFit="contain"
            />
          </div> */}
          {/* Hamburger Menu Icon */}
          {/* <div className="lg:hidden">
            <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
          </div> */}

          {/* Full Logo for Desktop */}
          {/* <div className="hidden lg:block">
            <Image
              src="/images/vikshitbharat.png"
              alt="Azadi ka Amrit Mahostav"
              width={isScrolled ? 80 : 100} 
              height={isScrolled ? 80 : 100}
              className="rounded-full"
            />
          </div> */}
        {/* </div> */}
        
          <div className="lg:hidden">
          {isOpen ? (
            <FaTimes onClick={toggleMenu} className="text-xl cursor-pointer z-50 absolute right-6 top-8" /> 
          ) : (
            <FaBars onClick={toggleMenu} className="text-xl cursor-pointer absolute right-6 top-8"/>
          )}
        </div>
      </div>

      <div className={`hidden item-center justify-center gap-16 lg:flex my-2`}>
        <div className={` items-center text-center flex ${isScrolled ? 'hidden' : 'lg:block'}`}>
        <h2 className={`font-bold text-3xl  text-white  ${isScrolled ? 'text-xs lg:text-2xl' : 'text-xl lg:text-4xl'}`}>
          8<sup>th</sup>   International Conference on Intelligence Computing and <br />Communication ICICC-2025 
            </h2>
            <h2 className={`text-sm text-[#112D32] font-bold ${isScrolled ? 'text-xs lg:text-base' : 'text-lg lg:text-xl'}`}>
            25<sup>th</sup> & 26<sup>th</sup> July - 2025<br></br>
            Organized by: Department of Information Technology
            </h2>
            </div>

            {/* <div className={`  ${isScrolled ? 'hidden' : 'lg:block'}`}>
            <Image
              src="/images/springer2.png"
              alt="springer"
              width={isScrolled ? 120 : 200} 
              height={isScrolled ? 120 : 200}
              className="border-2 border-[#16325B]"
            />
          </div> */}
        </div>
      
  
      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed font-bold left-0 top-0 w-full h-full bg-[#FFDC7F] text-black text-xl flex flex-col justify-center items-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="space-y-6 text-center ">
        <li><Link
        href="/"
        className="" onClick={toggleMenu}>
      Home
      </Link>
      </li>
      <li><Link
      href="/call_for_papers"
      className="" onClick={toggleMenu}>
        Call for papers
        </Link></li>

        <li><Link
          href="/important_dates"
          className="" onClick={toggleMenu}>
          Important Dates
        </Link></li>
        <li><Link
          href="/committees"
          className="" onClick={toggleMenu}>
          Committees
        </Link></li>
        <li><Link
          href="/author_info"
          className="" onClick={toggleMenu}>
          Author Info
        </Link></li>
        <li><Link
          href="/schedule"
          className="" onClick={toggleMenu}>
          Schedule
        </Link></li>
        <li><Link
          href="/speakers"
          className="" onClick={toggleMenu}>
          Guests & Speakers
        </Link></li>
        <li><Link
          href="/contact_us"
          className="" onClick={toggleMenu}>
          Contact Us
        </Link></li>
        <li><Link
          href="/vij_attractions"
          className="" onClick={toggleMenu}>
          Vijayawada Attractions
        </Link></li>
        </ul>
      </nav>

      {/* Desktop Navigation Menu */}
      <nav className={`hidden lg:flex justify-evenly px-24 ${isScrolled ? 'lg:mt-0 ' : 'lg:mt-4 '} bg-[#FFDC7F]`}>
      <Link
        href="/#home"
        className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
      Home
      </Link>
      <Link
      href="/call_for_papers"
      className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
        Call for Papers
        </Link>

        <Link
          href="/important_dates"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
          Important Dates
        </Link>
        <Link
          href="/committees"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
          Committees
        </Link>
        <Link
          href="/author_info"
          className={`cursor-pointer m-0.5    border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
          Author Info
        </Link>
        <Link
          href="/schedule"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
          Schedule
        </Link>
        <Link
          href="/speakers"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
         Guests & Speakers
        </Link>
        <Link
          href="/contact_us"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
         Contact Us
        </Link>
        
        <Link
          href="/vij_attractions"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-base py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
         Vijayawada Attractions
        </Link>
      </nav>
    </header>
      // </div>
  );
};

export default Header;
