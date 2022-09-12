import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbacktypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        }
    },
    Other: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de uma nuvem'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm () {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}/>
            )}

            <footer className="text-xs text-neutral-400">
                <a href="https://rcky.movidesk.com/kb/pt-br" target="blank" className="hover:underline underline-offset-2">suporte rcky</a>
            </footer>
        </div>
    );
}