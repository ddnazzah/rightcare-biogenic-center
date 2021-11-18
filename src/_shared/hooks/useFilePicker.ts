/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-08-15 05:20:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-08-15 05:54:07
 */
import { useState } from 'react';
import DocumentPicker, { types } from 'react-native-document-picker';

export const useFilePicker = (imageOnly?: boolean) => {
    const [files, setFiles] = useState<
        | {
              name: string | undefined;
              type: string | null;
              uri: string | undefined;
          }
        | undefined
    >();

    const openFilePicker = async () => {
        try {
            const res = await DocumentPicker.pickMultiple({
                type: [
                    types.images,
                    ...(!imageOnly
                        ? [
                              types.pdf,
                              types.doc,
                              types.docx,
                              types.plainText,
                              types.ppt,
                              types.pptx,
                              types.xls,
                              types.xlsx,
                          ]
                        : []),
                ],
            });
            setFiles({
                name: res[0].name,
                uri: res[0].uri,
                type: res[0].type,
            });

            console.log(res[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    };

    return { openFilePicker, files };
};
