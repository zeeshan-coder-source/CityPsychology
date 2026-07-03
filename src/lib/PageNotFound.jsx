import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-8">
                    <span className="text-primary-foreground font-heading font-bold text-xl">CP</span>
                </div>
                <h1 className="font-heading text-6xl font-bold text-foreground mb-4">404</h1>
                <p className="text-muted-foreground font-body text-lg mb-8">
                    The page you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>
        </div>
    );
}