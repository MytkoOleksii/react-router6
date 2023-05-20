import React from 'react';
import {Link, Outlet} from "react-router-dom";

function About() {
    return (
        <div>
          <h1> About</h1>
            Описание всего остального
            <ul>
                <li> <Link to={'contacts'}>Contacts</Link></li>
                <li> <Link to={'team'}>Team</Link></li>

            </ul>
          {/*  <Routes>
                <Route path={'contacts'} element={<p>Our contacts</p>} />
                <Route path={'team'} element={<p>Our team</p>} />
            </Routes>*/}

            <Outlet/>
</div>
    );
}

export default About;