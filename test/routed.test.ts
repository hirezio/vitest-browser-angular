import { expect, test } from '../src';
import { RoutedComponent } from './routed.component';

test('should render routed component with routing', async ({ mount }) => {
  const { component } = await mount(RoutedComponent, {
    withRouting: true,
  });

  // Check that the component loads
  await expect.element(component).toHaveTextContent('Routed Component');
  await expect.element(component).toHaveTextContent('Home');
  await expect.element(component).toHaveTextContent('About');
  await expect.element(component).toHaveTextContent('Contact');
});
