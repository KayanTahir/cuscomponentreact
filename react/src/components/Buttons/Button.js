import React from "react";
import "./Button.css";

/**
 * ✅ Reusable Button Component
 * Author Kayan Tahir
 *
 * @param {string} type - Button ka type define karta hai (e.g., 'primary', 'secondary', 'danger', etc.)
 * @param {string} size - Button ka size define karta hai ('small', 'medium', 'large')
 * @param {function} onClick - Button click hone par call hone wala function
 * @param {boolean} disabled - Agar true hoga to button disable hoga
 * @param {boolean} loading - Agar true hoga to loading state dikhayega
 * @param {ReactNode} icon - Button ke andar icon add karne ke liye
 * @param {ReactNode} children - Button ke text ya content ke liye
 */

const Button = ({
  type = "primary", // Default type 'primary'
  size = "medium", // Default size 'medium'
  onClick, // Button click hone par call hone wala function
  disabled = false, // Button ko disable karne ke liye
  loading = false, // Button ko loading state main dikhane ke liye
  icon = null, // Icon ko button ke andar dikhane ke liye
  children, // Button ke text ko handle karne ke liye
}) => {
  // ✅ Dynamic class name generate kar raha hai based on type, size, disabled state
  const className = `custom-button ${type} ${size} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <button
      className={className}
      onClick={onClick} // ✅ onClick event handle karega
      disabled={disabled || loading} // ✅ Disable karega agar 'disabled' ya 'loading' true ho
    >
      {/* ✅ Agar loading state true hogi to spinner show karega */}
      {loading ? <span className="spinner"></span> : icon}

      {/* ✅ Button ka text ya content show karega */}
      {children}
    </button>
  );
};

export default Button;

/**
 * ✅ How to Use This Button Component
 *
 * 👇 Example: Primary Button
 * <Button type="primary" onClick={() => alert('Primary Clicked!')}>
 *   Submit
 * </Button>
 *
 * 👇 Example: Secondary Button
 * <Button type="secondary" onClick={() => alert('Secondary Clicked!')}>
 *   Cancel
 * </Button>
 *
 * 👇 Example: Danger Button
 * <Button type="danger" onClick={() => alert('Danger Clicked!')}>
 *   Delete
 * </Button>
 *
 * 👇 Example: Outline Button
 * <Button type="outline" onClick={() => alert('Outline Clicked!')}>
 *   Outline
 * </Button>
 *
 * 👇 Example: Ghost Button
 * <Button type="ghost" onClick={() => alert('Ghost Clicked!')}>
 *   Ghost
 * </Button>
 *
 * 👇 Example: Link Button
 * <Button type="link" onClick={() => alert('Link Clicked!')}>
 *   Go to Home
 * </Button>
 *
 * 👇 Example: Loading Button
 * <Button type="primary" loading>
 *   Loading...
 * </Button>
 *
 * 👇 Example: Floating Action Button
 * <Button type="floating" onClick={() => alert('Floating Clicked!')}>
 *   +
 * </Button>
 *
 * 👇 Example: Disabled Button
 * <Button type="primary" disabled>
 *   Disabled
 * </Button>
 */
