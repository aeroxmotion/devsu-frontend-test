import DatePicker from 'react-native-date-picker';
import {Controller, useForm} from 'react-hook-form';
import React, {useState, type FC} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

import {IProduct} from '../../api';
import {formatDate} from '../../utils';
import {ThemeColor} from '../../constants';
import {Button, Input} from '../../components';
import {computeNextDateRevision} from './utils';
import {
  FORM_RULES,
  INITIAL_FORM_DEFAULT_VALUES,
  MINIMUM_RELEASE_DATE,
} from './constants';
import {ProductFormViewProps} from './ProductFormView.types';
import {useProductFormViewStyles} from './ProductFormView.styles';

export const ProductFormView: FC<ProductFormViewProps> = ({
  title,
  onFormSubmit,
  product,
}) => {
  const styles = useProductFormViewStyles();

  const {control, setValue, getValues, reset, handleSubmit, formState} =
    useForm<IProduct>({
      mode: 'onTouched',
      criteriaMode: 'all',
      defaultValues: product
        ? {
            ...product,
            date_release: new Date(product.date_release),
            date_revision: new Date(product.date_revision),
          }
        : INITIAL_FORM_DEFAULT_VALUES,
    });

  const [openDateReleasePicker, setOpenDateReleasePicker] = useState(false);

  const setDateReleaseValue = (date: Date) => {
    setValue('date_release', date);
    setValue('date_revision', computeNextDateRevision(date));
    setOpenDateReleasePicker(false);
  };

  const resetFormValues = () => {
    reset(
      product
        ? {...INITIAL_FORM_DEFAULT_VALUES, id: product.id}
        : INITIAL_FORM_DEFAULT_VALUES,
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          style={styles.form}
          contentContainerStyle={styles.formContent}>
          <Text style={styles.heading}>{title}</Text>

          <Controller
            name="id"
            control={control}
            rules={product ? {} : FORM_RULES.id}
            render={({field, fieldState}) => (
              <Input
                label="ID"
                disabled={!!product}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="name"
            control={control}
            rules={FORM_RULES.name}
            render={({field, fieldState}) => (
              <Input
                label="Nombre"
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            rules={FORM_RULES.description}
            render={({field, fieldState}) => (
              <Input
                label="Descripción"
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="logo"
            control={control}
            rules={FORM_RULES.logo}
            render={({field, fieldState}) => (
              <Input
                label="Logo"
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="date_release"
            control={control}
            rules={FORM_RULES.date_release}
            render={({field, fieldState}) => (
              <Input
                editable={false}
                label="Fecha Liberación"
                onPress={() => setOpenDateReleasePicker(true)}
                onFocus={() => setOpenDateReleasePicker(true)}
                value={formatDate(field.value)}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="date_revision"
            control={control}
            rules={FORM_RULES.date_revision}
            render={({field, fieldState}) => (
              <Input
                disabled
                label="Fecha Revisión"
                value={formatDate(field.value)}
                error={fieldState.error?.message}
              />
            )}
          />
        </ScrollView>

        <View style={styles.footer}>
          <Button
            disabled={formState.isSubmitting}
            color={ThemeColor.PrimaryButtonColor}
            background={ThemeColor.PrimaryButtonBackground}
            onPress={handleSubmit(onFormSubmit)}>
            {formState.isSubmitting ? (
              <ActivityIndicator
                color={ThemeColor.PrimaryButtonColor}
                size="small"
              />
            ) : (
              'Enviar'
            )}
          </Button>

          <Button
            onPress={resetFormValues}
            disabled={formState.isSubmitting}
            color={ThemeColor.SimpleButtonColor}
            background={ThemeColor.SimpleButtonBackground}>
            Reiniciar
          </Button>
        </View>
      </View>

      <DatePicker
        modal
        mode="date"
        open={openDateReleasePicker}
        onConfirm={setDateReleaseValue}
        minimumDate={MINIMUM_RELEASE_DATE}
        date={getValues().date_release as Date}
        onCancel={() => setOpenDateReleasePicker(false)}
      />
    </>
  );
};
