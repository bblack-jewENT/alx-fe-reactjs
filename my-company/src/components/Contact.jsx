import React from 'react';
import { useState } from 'react';

 function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });
