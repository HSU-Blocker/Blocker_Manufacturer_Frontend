import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './License.module.css';

const License = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.licenseContainer}>
            <button onClick={() => navigate(-1)} className={styles.backButton}>
                &larr; Back
            </button>
            <h1>Open Source Licenses</h1>
            <p>This application uses the following open source software:</p>
            <hr />
            <div className={styles.licenseInfo}>
                <h3>jsdom</h3>
                <ul>
                    <li><strong>Copyright:</strong> jsdom authors</li>
                    <li><strong>License:</strong> LGPL-2.0-or-later</li>
                    <li>
                        <strong>Source Code:</strong>{' '}
                        <a href="https://github.com/jsdom/jsdom" target="_blank" rel="noopener noreferrer">
                            https://github.com/jsdom/jsdom
                        </a>
                    </li>
                    <li>
                        <strong>License Text:</strong>{' '}
                        <a href="https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html" target="_blank" rel="noopener noreferrer">
                            https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default License;
