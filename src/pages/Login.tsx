import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import logo from '@/assets/logo.png';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only — no auth logic
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(circle, rgba(227,24,55,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src={logo} alt="Motozone Premium" className="h-16 w-auto mx-auto mb-4" />
          </Link>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            {isSignUp
              ? 'Join the Motozone community'
              : 'Sign in to your Motozone account'}
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div>
                <label className="text-sm font-body text-muted-foreground mb-1.5 block">Full Name</label>
                <Input
                  placeholder="Rahul Sharma"
                  className="bg-secondary border-border h-11"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-body text-muted-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="you@email.com"
                  className="bg-secondary border-border h-11 pl-10"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-body text-muted-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="bg-secondary border-border h-11 pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-body text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded-sm border-border bg-secondary accent-primary" />
                  Remember me
                </label>
                <button type="button" className="text-sm font-body text-primary hover:text-primary/80 transition-colors duration-200">
                  Forgot password?
                </button>
              </div>
            )}

            <Button variant="amber" size="lg" type="submit" className="w-full">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-xs font-body">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="ghost-light" size="default" className="w-full">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </Button>
            <Button variant="ghost-light" size="default" className="w-full">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Apple
            </Button>
          </div>
        </div>

        {/* Toggle */}
        <p className="text-center mt-6 text-sm font-body text-muted-foreground">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
