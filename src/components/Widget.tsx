import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';
import logo from '../assets/logo.png';

export function Widget(){
   
    return(
        <Popover className='absolute bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col items-end'>
            <Popover.Panel> <WidgetForm /> </Popover.Panel>
            
            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <img src={logo}  className='w-14 h-14'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'>Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    );
}