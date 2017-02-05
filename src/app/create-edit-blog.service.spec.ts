/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateEditBlogService } from './create-edit-blog.service';

describe('CreateEditBlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEditBlogService]
    });
  });

  it('should ...', inject([CreateEditBlogService], (service: CreateEditBlogService) => {
    expect(service).toBeTruthy();
  }));
});
