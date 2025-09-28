"use client";
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Password validation function
    const isValidPassword = (password) => {
        // Must be at least 8 characters and contain both letters and numbers
        const hasMinLength = password.length >= 8;
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        return hasMinLength && hasLetters && hasNumbers;
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (!isValidPassword(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters and contain both letters and numbers';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        
        try {    
            router.push('/overview');
            
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div id="formDiv" className="px-8 py-6">
                <div id="formHeader" className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-600 text-left mb-2">Login</h1>
                    <p className="text-gray-400 text-left text-sm">Kindly enter your details to login</p>
                </div>
                <div id="formFields" className="py-3">
                    <TextField 
                        name="email"
                        label="Email Address" 
                        type="email"
                        fullWidth 
                        value={formData.email}
                        onChange={handleInputChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        placeholder="Enter your email address"
                    />
                    <br/>
                    <br/>
                    <TextField 
                        name="password"
                        label="Password" 
                        type="password"
                        fullWidth 
                        className="pt-3" 
                        value={formData.password}
                        onChange={handleInputChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        placeholder="Enter your password"
                    />
                    <br/>
                    <br/>
                    <Button 
                        type="submit"
                        variant="contained" 
                        fullWidth
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Logging in...' : 'Log in'}
                    </Button>
                    <br/>
                    <br/>
                    <Link href="#" className="text-blue-500 text-center">Forgot your password?</Link>
                </div>
                <div id="formFooter" className="text-gray py-3">
                    <Link href="#" className="text-gray-600 underline">Privacy Policy</Link> <span className="text-gray-400">and</span> <Link href="#" className="text-gray-600 underline">Terms of services</Link>
                </div>
            </div>
        </form>
    )
}