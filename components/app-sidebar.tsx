"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings, 
  Mail 
} from "lucide-react"
import { COLORS, SIDEBAR_ITEMS } from "@/lib/constants"

// Website SVG Component
const WebsiteIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 1080 1080" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <rect x="35" y="61" width="980" height="958" rx="138" fill="white"/>
    <path d="M505.901 399.02C511.987 395.761 514.278 388.185 511.02 382.099C507.761 376.013 500.185 373.722 494.099 376.98L505.901 399.02ZM471.138 403.455L465.238 392.435L464.643 392.753L464.086 393.134L471.138 403.455ZM444 422L451.053 432.32L478.191 413.775L471.138 403.455L464.086 393.134L436.947 411.68L444 422ZM471.138 403.455L477.039 414.474L505.901 399.02L500 388L494.099 376.98L465.238 392.435L471.138 403.455Z" fill="#1E3655"/>
    <path d="M207 401C277.657 421.68 316.692 435.859 385 467" stroke="#E76E1A" strokeWidth="25" strokeLinecap="round"/>
    <path d="M207 463C277.657 483.993 314.932 505.039 385 530" stroke="#E76E1A" strokeWidth="25" strokeLinecap="round"/>
    <path d="M206 526C275.384 550.532 323.519 563.443 389 594" stroke="#E76E1A" strokeWidth="25" strokeLinecap="round"/>
    <path d="M203 605C273.368 629.938 315.067 647.438 385 675" stroke="#E76E1A" strokeWidth="25" strokeLinecap="round"/>
    <path d="M203 665C273.161 689.062 313.438 707 381 735" stroke="#E76E1A" strokeWidth="25" strokeLinecap="round"/>
    <path d="M157 274C157 274 252.684 293.906 309.38 320.862C368.895 349.158 447 418.491 447 418.491V878" stroke="#1E3655" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M124.816 307C124.816 307 117 735.73 117 751.818C117 767.906 202.974 778.777 348 854" stroke="#E76E1A" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
    <mask id="path-10-inside-1_34_2" fill="white">
      <path d="M702.277 744.334C708.266 752.148 706.811 763.457 698.257 768.33C683.471 776.752 667.164 782.327 650.19 784.7C627.298 787.9 603.964 785.168 582.44 776.768C560.916 768.367 541.928 754.581 527.31 736.74C512.691 718.9 502.934 697.606 498.981 674.915C495.028 652.223 497.012 628.899 504.742 607.194C512.471 585.489 525.685 566.135 543.109 551C560.533 535.864 581.578 525.459 604.214 520.786C621.018 517.318 638.277 517.096 655.066 520.073C664.74 521.788 669.908 531.923 666.915 541.281V541.281C663.931 550.61 653.947 555.591 644.233 554.334C633.352 552.925 622.27 553.327 611.446 555.561C594.809 558.995 579.341 566.643 566.535 577.767C553.729 588.891 544.017 603.116 538.335 619.069C532.654 635.022 531.196 652.164 534.102 668.842C537.007 685.519 544.178 701.17 554.922 714.282C565.667 727.395 579.622 737.527 595.442 743.701C611.262 749.876 628.411 751.884 645.237 749.531C656.182 748.001 666.749 744.66 676.515 739.683C685.242 735.236 696.318 736.56 702.277 744.334V744.334Z"/>
    </mask>
    <path d="M702.277 744.334C708.266 752.148 706.811 763.457 698.257 768.33C683.471 776.752 667.164 782.327 650.19 784.7C627.298 787.9 603.964 785.168 582.44 776.768C560.916 768.367 541.928 754.581 527.31 736.74C512.691 718.9 502.934 697.606 498.981 674.915C495.028 652.223 497.012 628.899 504.742 607.194C512.471 585.489 525.685 566.135 543.109 551C560.533 535.864 581.578 525.459 604.214 520.786C621.018 517.318 638.277 517.096 655.066 520.073C664.74 521.788 669.908 531.923 666.915 541.281V541.281C663.931 550.61 653.947 555.591 644.233 554.334C633.352 552.925 622.27 553.327 611.446 555.561C594.809 558.995 579.341 566.643 566.535 577.767C553.729 588.891 544.017 603.116 538.335 619.069C532.654 635.022 531.196 652.164 534.102 668.842C537.007 685.519 544.178 701.17 554.922 714.282C565.667 727.395 579.622 737.527 595.442 743.701C611.262 749.876 628.411 751.884 645.237 749.531C656.182 748.001 666.749 744.66 676.515 739.683C685.242 735.236 696.318 736.56 702.277 744.334V744.334Z" stroke="#1E3655" strokeWidth="70" strokeLinejoin="round" mask="url(#path-10-inside-1_34_2)"/>
    <mask id="path-11-inside-2_34_2" fill="white">
      <path d="M687.635 760.324C690.778 766.159 698.092 768.384 703.623 764.733C724.05 751.245 740.467 732.377 750.995 710.109C763.239 684.214 766.874 655.08 761.371 626.969C755.867 598.859 741.512 573.247 720.407 553.881C702.259 537.228 679.938 525.944 655.932 521.156C649.433 519.86 643.498 524.679 642.787 531.268L641.547 542.765C640.836 549.354 645.629 555.199 652.084 556.704C668.543 560.543 683.811 568.566 696.363 580.084C711.875 594.318 722.425 613.142 726.47 633.802C730.515 654.463 727.843 675.876 718.844 694.908C711.563 710.309 700.448 723.498 686.652 733.261C681.242 737.089 679.007 744.31 682.15 750.144L687.635 760.324Z"/>
    </mask>
    <path d="M687.635 760.324C690.778 766.159 698.092 768.384 703.623 764.733C724.05 751.245 740.467 732.377 750.995 710.109C763.239 684.214 766.874 655.08 761.371 626.969C755.867 598.859 741.512 573.247 720.407 553.881C702.259 537.228 679.938 525.944 655.932 521.156C649.433 519.86 643.498 524.679 642.787 531.268L641.547 542.765C640.836 549.354 645.629 555.199 652.084 556.704C668.543 560.543 683.811 568.566 696.363 580.084C711.875 594.318 722.425 613.142 726.47 633.802C730.515 654.463 727.843 675.876 718.844 694.908C711.563 710.309 700.448 723.498 686.652 733.261C681.242 737.089 679.007 744.31 682.15 750.144L687.635 760.324Z" stroke="#E76E1A" strokeWidth="70" strokeLinejoin="round" mask="url(#path-11-inside-2_34_2)"/>
    <path d="M627 595V659H683" stroke="#1E3655" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M558.439 316L527 416.529C527 416.529 575.967 429.222 603.114 445.901C629.051 461.837 661.414 505 661.414 505C661.414 505 715.671 477.752 752.034 474.86C785.949 472.163 838.903 481.48 838.903 481.48L860 378.469L688.743 394.603L558.439 316Z" fill="#1E3655" stroke="#1E3655" strokeWidth="35" strokeLinecap="round"/>
    <g filter="url(#filter0_f_34_2)">
      <path d="M523 427C523 427 572.377 441.231 599.202 457.625C627.6 474.98 659.293 518 659.293 518C659.293 518 705.961 490.935 741.591 486.938C778.157 482.835 840 491.75 840 491.75" stroke="black" strokeOpacity="0.6" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <path d="M562 296C562 296 608.892 313.601 635.677 329.874C664.032 347.102 704.609 372 704.609 372C704.609 372 753.816 369.454 789.391 365.486C825.903 361.413 872 361.143 872 361.143" stroke="#90B4D7" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M806.321 514.75L800.245 803.934C800.245 803.934 759.131 805.98 732.971 809.145C707.051 812.28 667 820 667 820M940 358L937.396 518.658" stroke="#1E3655" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M481 239.103L741.975 199L963 343.282L713.75 352L481 239.103Z" fill="#1E3655" stroke="#1E3655" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M937 467L937 508" stroke="#E76E1A" strokeWidth="56" strokeLinecap="round" strokeLinejoin="round"/>
    <ellipse cx="723.5" cy="281" rx="29.5" ry="22" fill="#E76E1A"/>
    <path d="M155.13 273L146 736.614C146 736.614 241.8 769.144 299.898 797.879C356.417 825.834 438.145 880 438.145 880C438.145 880 482.012 858.746 511.615 849.15C537.388 840.796 579 832.639 579 832.639" stroke="#1E3655" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M518 440C518 440 565.346 453.667 592.142 469.91C620.508 487.105 654.142 541 654.142 541C654.142 541 709.469 505.081 745.059 501.12C781.585 497.055 839 506.322 839 506.322" stroke="#E76E1A" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <filter id="filter0_f_34_2" x="490.097" y="394.097" width="382.805" height="156.804" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="10.2" result="effect1_foregroundBlur_34_2"/>
      </filter>
    </defs>
  </svg>
)

// Icon mapping for dynamic icon rendering
const iconMap = {
  BookOpen,
  FileText,
  Calendar,
  Award,
  MessageSquare,
  Mail,
  Users,
  Settings
}

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="border-r transition-all duration-300 ease-in-out bg-orange-500"
    >
      <SidebarHeader className="p-6 transition-all duration-300 ease-in-out flex items-start justify-start bg-orange-500">
        <div className="flex items-start justify-start space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <WebsiteIcon className="w-8 h-8" style={{ color: COLORS.primary.orange }} />
          </div>
          <div className="text-start">
            <h3 className="text-lg font-bold leading-none text-white">Study Your Bit</h3>
            <p className="text-xs text-white/80 leading-none mt-1">Learn Smart, Learn Fast</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="transition-all duration-300 ease-in-out bg-orange-500">
        {/* Student Corner */}
        <SidebarGroup className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
          <SidebarGroupLabel
            className="text-white font-semibold px-4 py-3 rounded-md transition-all duration-300 hover:scale-105 transform"
            style={{ backgroundColor: COLORS.primary.blue }}
          >
            Student Corner
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_ITEMS.student.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <SidebarMenuItem key={item.label} className="animate-slide-in-left" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <SidebarMenuButton 
                      className="text-white hover:bg-orange-600 transition-all duration-300 hover:translate-x-2 hover:scale-105 group py-3"
                      asChild
                    >
                      <a href={item.href}>
                        <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                        <span className="transition-all duration-300">{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Professor Corner */}
        <SidebarGroup className="animate-slide-in-left mt-6" style={{ animationDelay: "0.7s" }}>
          <SidebarGroupLabel
            className="text-white font-semibold px-4 py-3 rounded-md transition-all duration-300 hover:scale-105 transform"
            style={{ backgroundColor: COLORS.primary.blue }}
          >
            Professor Corner
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_ITEMS.professor.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <SidebarMenuItem key={item.label} className="animate-slide-in-left" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                    <SidebarMenuButton 
                      className="text-white hover:bg-orange-600 transition-all duration-300 hover:translate-x-2 hover:scale-105 group py-3"
                      asChild
                    >
                      <a href={item.href}>
                        <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                        <span className="transition-all duration-300">{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter
        className="p-6 animate-slide-in-left bg-orange-500"
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-white hover:bg-orange-600 transition-all duration-300 hover:translate-x-2 hover:scale-105 group py-3">
              <Settings className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              <span className="transition-all duration-300">Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </Sidebar>
  )
}
