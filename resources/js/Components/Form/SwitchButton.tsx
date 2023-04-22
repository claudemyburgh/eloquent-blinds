import { FC, useState } from "react";
import { Switch } from "@headlessui/react";
import { router } from "@inertiajs/react";

interface SwitchProps {
    model: any;
    namedRoute: string;
    live: boolean;
}

const SwitchButton: FC<SwitchProps> = ({ model, namedRoute, live }) => {
    const [enabled, setEnabled] = useState(live);

    function handleLive() {
        // setEnabled(!enabled);
        router.put(route(namedRoute, model), {
            live: true,
        });
    }

    return (
        <div>
            <pre>{JSON.stringify(model, null, 2)}</pre>
            <Switch
                checked={enabled}
                onChange={handleLive}
                className={`${enabled ? "bg-primary-500" : "bg-gray-900"}
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-primary-500 focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Live</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    );
};

export default SwitchButton;
