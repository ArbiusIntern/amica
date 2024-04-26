import { useTranslation } from 'react-i18next';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

import { BasicPage, FormRow } from './common';
import { updateConfig } from "@/utils/config";
import { TextInput } from '@/components/textInput';
import { SwitchBox } from "@/components/switchBox"
import { NumberInput } from '../numberInput';
import { useState } from 'react';

const f0Method = [
    {key: "none",   label: "None"},
    {key: "crepe",  label: "crepe"},
    {key: "harvest",label: "harvest"},
    {key: "pm",     label: "pm"},
    {key: "rmvpe",  label: "rmvpe"},
  ];

export function RVCSettingsPage({
    rvcUrl,
    rvcEnabled,
    rvcModelName,
    rvcIndexPath,
    rvcF0upKey,
    rvcF0Method,
    rvcIndexRate,
    rvcIsHalf,
    rvcFilterRadius,
    rvcResampleSr,
    rvcRmsMixRate,
    rvcProtect,
    setRvcUrl,
    setRvcEnabled,
    setRvcModelName,
    setRvcIndexPath,
    setRvcF0upKey,
    setRvcF0Method,
    setRvcIndexRate,
    setRvcIsHalf,
    setRvcFilterRadius,
    setRvcResampleSr,
    setRvcRmsMixRate,
    setRvcProtect,
    setSettingsUpdated,
}: {
    rvcUrl: string;
    rvcEnabled: boolean;
    rvcModelName: string;
    rvcIndexPath: string;
    rvcF0upKey: number;
    rvcF0Method: string,
    rvcIndexRate: string;
    rvcIsHalf: boolean;
    rvcFilterRadius: number;
    rvcResampleSr: number;
    rvcRmsMixRate: string;
    rvcProtect: number;
    setRvcUrl: (rvcUrl: string) => void;
    setRvcEnabled: (rvcEnabled: boolean) => void;
    setRvcModelName: (rvcModelName: string) => void;
    setRvcIndexPath: (timeBeforeIdle: string) => void;
    setRvcF0upKey: (rvcF0upKey: number) => void;
    setRvcF0Method: (rvcF0Method: string) => void;
    setRvcIndexRate: (rvcIndexRate: string) => void;
    setRvcIsHalf: (rvcIsHalf: boolean) => void;
    setRvcFilterRadius: (rvcFilterRadius: number) => void;
    setRvcResampleSr: (rvcResampleSr: number) => void;
    setRvcRmsMixRate: (rvcRmsMixRate: string) => void;
    setRvcProtect: (rvcProtect: number) => void;
    setSettingsUpdated: (updated: boolean) => void;
}) {
    const { t } = useTranslation();
    const [showInfo, setShowInfo] = useState(false);

    return (
        <BasicPage
          title={`${t("RVC")} ${t("Settings")}`}
          description={`${t("Configure")} ${t("RVC")}`}
        >
            <ul role="list" className="divide-y divide-gray-100 max-w-xs">
                <li className="py-4">
                    <FormRow label={`${t("Use")} ${t("RVC")}`}>
                        <SwitchBox
                            value={rvcEnabled}
                            label={`${t("RVC")} ${t("Enabled")}`}
                            onChange={(value: boolean) => {
                                setRvcEnabled(value);
                                updateConfig("rvc_enabled", value.toString());
                                setSettingsUpdated(true);
                            }}
                        />
                    </FormRow>
                </li>
                { rvcEnabled && (
                    <>
                        <li className="py-4">
                        <FormRow label={t("URL")}>
                            <TextInput
                            value={rvcUrl}
                            onChange={(event: React.ChangeEvent<any>) => {
                                setRvcUrl(event.target.value);
                                updateConfig("rvc_url", event.target.value);
                                setSettingsUpdated(true);
                            }}
                            />
                        </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("Model Name")}`}>
                                <TextInput
                                    value={rvcModelName}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcModelName(event.target.value);
                                        updateConfig("rvc_model_name", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("Index Path")}`}>
                                <TextInput
                                    value={rvcIndexPath}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcIndexPath(event.target.value);
                                        updateConfig("rvc_index_path", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("F0 UpKey")}`}>
                                <NumberInput
                                    value={rvcF0upKey}
                                    min={-12}
                                    max={12}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcF0upKey(event.target.value);
                                        updateConfig("rvc_f0_upkey", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("F0 Method")}`}>
                                <select
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={rvcF0Method}
                                onChange={(event: React.ChangeEvent<any>) => {
                                    setRvcF0Method(event.target.value);
                                    updateConfig("rvc_f0_method", event.target.value);
                                    setSettingsUpdated(true);
                                }}
                                >
                                {f0Method.map((method) => (
                                    <option key={method.key} value={method.key}>{method.label}</option>
                                ))}
                                </select>
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("Index Rate")}`}>
                                <TextInput
                                    value={rvcIndexRate}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcIndexRate(event.target.value);
                                        updateConfig("rvc_index_rate", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("Is Half")}`}>
                                <SwitchBox
                                    value={rvcIsHalf}
                                    label={`${t("RVC")} ${t("Is Half")}`}
                                    onChange={(value: boolean) => {
                                        setRvcIsHalf(value);
                                        updateConfig("rvc_is_half", value.toString());
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("Filter Radius")}`}>
                                <NumberInput
                                    value={rvcFilterRadius}
                                    min={0}
                                    max={7}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcFilterRadius(event.target.value);
                                        updateConfig("rvc_filter_radius", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("Resample Sr")}`}>
                                <NumberInput
                                    value={rvcResampleSr}
                                    min={0}
                                    max={48000}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcResampleSr(event.target.value);
                                        updateConfig("rvc_resample_sr", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("RMS Mix Rate")}`}>
                                <TextInput
                                    value={rvcRmsMixRate}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcRmsMixRate(event.target.value);
                                        updateConfig("rvc_rmx_mix_rate", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>
                        <li className="py-4">
                            <FormRow label={`${t("Specify")} ${t("Protect")}`}>
                                <NumberInput
                                    value={rvcProtect}
                                    min={0}
                                    max={0.5}
                                    onChange={(event: React.ChangeEvent<any>) => {
                                        setRvcProtect(event.target.value);
                                        updateConfig("rvc_protect", event.target.value);
                                        setSettingsUpdated(true);
                                    }}
                                />
                            </FormRow>
                        </li>

                    </>
                )}
            </ul>
        </BasicPage>
  );
}